import React, { Component } from 'react';
import config from './config';

//use the JavaScript Cookie library
import Cookies from 'js-cookie';

//sets up a context and returns an object with Provider and Consumer properties that are also objects.
const Context = React.createContext();

//A higher-order component (HOC) that shares functionality across the components of the app. Returns a Provider component which provides the application state and any actions or event handlers that need to be shared between components, via a required value prop.
export class Provider extends Component {
    //stores the current user name, email and password
    state = {
        authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
        userPassword: Cookies.getJSON('userPassword') || null
    }
    
    //method used to make requests to the REST API
    api = (path, method = 'GET', body = null, requiresAuthentication = false, credentials = null) => {
        
      const url = config.apiBaseUrl + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        if (requiresAuthentication) { 
            const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }

        return fetch(url, options);
    }

    //method used to retrieve a user from the API.
    getUser = async (emailAddress, password) => {
        const response = await this.api('/users', 'GET', null, true, {emailAddress, password});
        if (response.status === 200) {
            //returns the user data
            return response.json()
                .then(responseData => responseData);
        } else if (response.status === 401) {     
            //if the user authentication middleware fails, returns null      
            return null;
        } else {
            throw new Error();
        }
    }

    createUser = async (user) => {
      const response = await this.api('/users', 'POST', user);
      if (response.status === 201) {
        return [];
      }
      else if (response.status === 400) {
        return response.json().then(data => {
          return data.errors;
        });
      }
      else {
        throw new Error();
      }
    }

    //method used to call getUser, then sets the user state and cookies if successful
    signIn = async (emailAddress, password) => {
        const user = await this.getUser(emailAddress, password);
        if (user !== null) {
            const encryptedPassword = btoa(password);
            this.setState({ 
                authenticatedUser: user,
                userPassword: encryptedPassword
            });

            Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
            Cookies.set('userPassword', encryptedPassword, { expires: 1});
        }
        return user;
    }

    //method used to sign out the user, removes user state and cookies
    signOut = () => {
        this.setState({
            authenticatedUser: null,
            userPassword: null
        });
        Cookies.remove('authenticatedUser');
        Cookies.remove('userPassword');
    }

    //method used to sign up a user, returns an errors array
    signUp = async (userData) => {
        const response = await this.api('/users', 'POST', userData);
        if (response.status === 201) {
           this.props.history.push('/');
            //returns empty errors array if user successfully created
            return [];
        } else if (response.status === 400) {
            //returns errors array if validation fails
            return response.json()
                    .then(responseData => {
                        return responseData.errors;
                    })
        } else if (response.status === 200) {
            //returns errors array if user already exists
            return response.json()
                .then(responseData => {
                    return [ responseData.message ];
                })
        } else {
            throw new Error();
        }
    }

    //method used to create a course, returns an errors array
    createCourse = async (courseData) => {
        const { emailAddress } = this.state.authenticatedUser;  
        const password = atob(this.state.userPassword);
        const response = await this.api('/courses', 'POST', courseData, true, {emailAddress, password});
      //   console.log(response)
        if (response.status === 201) {

            //returns empty errors array if course successfully created
            return [];

        } else if (response.status === 400) {
            //returns errors array if validation fails
            return response.json()
                    .then(responseData => {
                        return responseData.errors;
                    })
        } else {
            throw new Error();
        }
    }

    //method retrieves course data
    getCourse = async (courseId) => {
        const response = await this.api(`/courses/${courseId}`, 'GET', null);
        if (response.status === 200) {
            //returns course data if course exists
            return response.json()
                .then(responseData => responseData);
        } else if (response.status === 404) { 
            //returns null if course doesn't exist          
            return null;
        } else {
            throw new Error();
        }
    }

    //method used to retrieve all course data
    getCourses = async () => {
        const response = await this.api(`/courses`, 'GET', null);
        if (response.status === 200) {
            //returns all course data if successful
            return response.json()
                .then(responseData => responseData);
        } else {
            throw new Error();
        }
    }

    //method used to update a course, returns an errors array
    updateCourse = async (courseId, courseData) => {
        const { emailAddress } = this.state.authenticatedUser;  
        const password = atob(this.state.userPassword);
        const response = await this.api(`/courses/${courseId}`, 'PUT', courseData, true, {emailAddress, password});
        if (response.status === 204) {
            //returns an empty errors array if course successfully updated
            return [];
        } else if (response.status === 400) {
            //returns errors array if any validation errors
            return response.json()
                .then(responseData => {
                    const errors = [ responseData.errors || responseData.message ];
                    return errors;
                })
        } else {
            throw new Error();
        }
    }

    //method used to delete a course
    deleteCourse = async (courseId) => {
        const { emailAddress } = this.state.authenticatedUser;  
        const password = atob(this.state.userPassword);
        return await this.api(`/courses/${courseId}`, 'DELETE', null, true, {emailAddress, password});
    }
    
    render() {
        const value = {
            authenticatedUser: this.state.authenticatedUser,
            userPassword: this.state.userPassword,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut,
                signUp: this.signUp,
                createCourse: this.createCourse,
                updateCourse: this.updateCourse,
                getCourse: this.getCourse,
                deleteCourse: this.deleteCourse,
                getCourses: this.getCourses,
                createUser: this.createUser
            }
        }

        return ( 
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order function that wraps the provided component in a Context.Consumer component. withContext automatically subscribes (or connects) the component passed to it to all actions and context changes. to render anything inside the Consumer, use a Render Prop: a technique for sharing code between React components using a prop whose value is a function. (Borrowed from the React Authentication course on Team Treehouse)
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
export default function withContext(Component) {
    return function ContextComponent(props) {
      return (
        <Context.Consumer>
          {context => <Component {...props} context={context} />}
        </Context.Consumer>
      );
    }
  }
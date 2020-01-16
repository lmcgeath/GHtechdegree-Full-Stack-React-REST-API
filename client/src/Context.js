import React, { Component } from 'react';
import config from './config';

import Data from './Data';
import Cookies from 'js-cookie';
const Context = React.createContext(); 

export class Provider extends Component {

   state = {
      authenticatedUser: null
    };
  constructor() {
    super();
    this.data = new Data();
  }

  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
   const url = config.apiBaseUrl + path;
 
   const options = {
     method,
     headers: {
       'Content-Type': 'application/json; charset=utf-8',
     },
   };

   if (body !== null) {
     options.body = JSON.stringify(body);
   }
     // Check if auth is required
 if (requiresAuth) {    
  const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
  options.headers['Authorization'] = `Basic ${encodedCredentials}`;
  }

   return fetch(url, options);
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

  render() {
   const { authenticatedUser } = this.state;
   const value = {
      authenticatedUser,
      data: this.data,
      actions: { // Add the 'actions' property and object
         signIn: this.signIn,
         signOut: this.signOut,
         signUp: this.signUp,
         createCourse: this.createCourse,
         updateCourse: this.updateCourse,
         getCourse: this.getCourse,
         deleteCourse: this.deleteCourse,
         getCourses: this.getCourses
   }
};
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  
  signIn = async (emailAddress, password) => {
   const user = await this.data.getUser(emailAddress, password);
   if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
   }
   return user;
  }

  signOut = () => {

  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
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


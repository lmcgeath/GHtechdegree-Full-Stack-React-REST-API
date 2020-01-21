import React, { Component } from 'react';
// import config from './config';

import Data from './Data';
import Cookies from 'js-cookie';
const Context = React.createContext(); 

export class Provider extends Component {

   state = {
      authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
        userPassword: Cookies.getJSON('userPassword') || null
    }

    constructor() {
      super();
      this.data = new Data();
    }

  render() {
   // const { authenticatedUser } = this.state;
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


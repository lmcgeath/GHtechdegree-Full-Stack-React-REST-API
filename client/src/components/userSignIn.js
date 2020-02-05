//- UserSignIn - This component provides the "Sign In" screen by rendering a form that allows a user to sign using their existing account information. The component also renders a "Sign In" button that when clicked signs in the user and a "Cancel" button that returns the user to the default route (i.e. the list of courses).

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

export default class UserSignIn extends Component {
  state = {
    emailAddress: '',
    password: '',
    errors: [],
  }

  render() {
    /* In my render, I retrieve emailAddress, password, and errors from state and 
    save them to their own handy variables. */
    const {
      emailAddress,
      password,
      errors,
    } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          {/* I pass my form down five props:
            1) cancel, which holds the cancel function I have defined below;
            2) errors, the errors array held in state in case of validation errors;
            3) submit, which holds the submit function I have defined below;
            4) the text for the submit button,
            5) and the elements (ie. the input fields) that the form will hold.
            I use React Fragments because 'Fragments let you group a list of
            children without adding extra nodes to the DOM.'
             See: https://reactjs.org/docs/fragments.html */}
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="text"
                  value={emailAddress}
                  onChange={this.change}
                  placeholder="Email" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.change}
                  placeholder="Password" />
              </React.Fragment>
            )} />
          <p>
            Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
          </p>
        </div>
      </div>
    );
  }

  change = (event) => {
    /* My change function allows me to make the CreateCourse component a 'controlled
    component'. The change method runs on every key stroke to update state, and
    this makes it very straightforward to modify or validate user input.
    See: https://reactjs.org/docs/forms.html */
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {
    /* In my submit function, first I retrieve my context from props and save
    it to a handy variable. Then I retrieve emailAddress and password from state
    and save them to their own handy variables.
    */
    const { context } = this.props;
    const { emailAddress, password } = this.state;

    ///I call my signIn() method, stored in my Context.
    context.actions.signIn(emailAddress, password)
      .then((user) => {
        //If no user is returned, then I set errors in state to an array with one
        //item: the string 'Sign-in was unsuccessful'.
        if (user === null) {
          this.setState(() => {
            return { errors: [ 'Sign-in was unsuccessful' ] };
          });
        } else {
          //If the signIn method is successful, then I direct the user back to
          //the previous page they were on.
         this.props.history.push('/');
          
         //  window.history.back();
        }
      })
      .catch((error) => {
        //If any other errors occur, I log the error to the console.
        console.error(error);
      });
  }

  cancel = () => {
      //In my cancel method, I simply redirect the user to the home page.
    this.props.history.push('/');
  }
}
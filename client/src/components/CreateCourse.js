//- CreateCourse - This component provides the "Create Course" screen by rendering a form that allows a user to create a new course. The component also renders a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route. This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
import React, { Component } from 'react';

import Form from './Form';

export default class CreateCourse extends Component {
  /* Properties the user needs to complete for a new course.*/
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    userId: this.props.context.authenticatedUser.id,
    errors: []
  }
  
  change = (event) => {
   const name = event.target.name;
   const value = event.target.value;

   this.setState(() => {
     return {
       [name]: value
     };
   });
}

 submit = () => {
   const {context} = this.props;
   const {
     title,
     description,
     estimatedTime,
     materialsNeeded,
     userId
   } = this.state;
   const {emailAddress} = context.authenticatedUser;
   const password = context.userPassword;

   const course = {
     title,
     description,
     estimatedTime,
     materialsNeeded,
     userId
   }
   //Calls createCourse() method, stored in Context.
   context.actions.createCourse(course, {emailAddress, password})
   .then( errors => {
      if (errors.length) {
          //if there are errors, sets the errors state
          this.setState({ errors });
      } else {
          //if there aren't any errors, redirects to the course list
          this.props.history.push('/courses');
      }
  })
  .catch( error => {
      console.log(error);
      this.props.history.push('/error');
  })

}

 cancel = () => {
   //redirects the user to the home page. 
   this.props.history.push('/');
 }

  render() {
    const { context } = this.props;
    const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      errors,
    } = this.state;
    const ownerName = `${context.authenticatedUser.firstName} ${context.authenticatedUser.lastName}`

    return (
        <div className="bounds course--detail">
          <h1>Create Course</h1>
          
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Create Course"
            elements={() => (
              <React.Fragment>
                <div className="grid-66">
                  <div className="course--header">
                  <h4 className="course--label">Course</h4>
                    <input
                      id="title"
                      name="title"
                      className="input-title course--title--input"
                      type="text"
                      value={title}
                      onChange={this.change}
                      placeholder="Course Title..." />
                    <p>by {ownerName}</p>
                  </div>
                  <div className="course--description">
                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      value={description}
                      onChange={this.change}
                      placeholder="Course Description..."
                    />
                  </div>
                </div>
                <div className="grid-25 grid-right">
                  <div className="course--stats">
                    <ul className="course--stats--list">
                      <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <input
                          id= "estimatedTime"
                          name = "estimatedTime"
                          type="text"
                          value={estimatedTime}
                          onChange={this.change}
                          placeholder="Hours"
                        />
                      </li>
                      <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <textarea
                          id="materialsNeeded"
                          name="materialsNeeded"
                          type="text"
                          value={materialsNeeded}
                          onChange={this.change}
                          placeholder="Materials Needed..."
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </div>
    )
  };

}

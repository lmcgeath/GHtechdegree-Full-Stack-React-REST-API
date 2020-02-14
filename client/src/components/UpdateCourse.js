// This component provides the "Update Course" screen by rendering a form that allows a user to update one of their existing courses. The component also renders an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route. This component also renders a "Cancel" button that returns the user to the "Course Detail" screen.
import React, { Component } from 'react';

import Form from './Form.js';

export default class UpdateCourse extends Component {
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    ownerName: '',
    errors: []
  }

  async componentDidMount(){
    const { context } = this.props;
    await context.actions.getCourse(this.props.match.params.id)
      .then(course => {
        const {
          title,
          description,
          estimatedTime,
          materialsNeeded
        } = course.course;
    
        const ownerName = `${context.authenticatedUser.firstName} ${context.authenticatedUser.lastName}`

        this.setState({
          title,
          description,
          estimatedTime,
          materialsNeeded,
          ownerName,
          course
        })
      });

      /* Redirects user to forbidden path if they do not own the course */
      if (this.state.course.course.userId !== context.authenticatedUser.id) {
        this.props.history.push('/forbidden');
      }
  }

  render(){
    const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      ownerName,
      errors
    } = this.state;

    return(
      <div className="bounds course--detail">
        <h1>Update Course</h1>
        
        <div>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Update Course"
            elements={() => (
              <React.Fragment>
              <div className="grid-66">
                <div className="course--header">
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
                        id="estimatedTime"
                        name="estimatedTime"
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
      </div>
    )
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
    const { context } = this.props;
    const {
      title,
      description,
      estimatedTime,
      materialsNeeded
    } = this.state;
    const {id} = this.state.course.course;
    const {emailAddress} = context.authenticatedUser;
    const password = context.authenticatedUserPassword;
    const courseData = {
      title,
      description,
      estimatedTime,
      materialsNeeded
    }
    ///Calls updateCourse() method, stored in Context.
    context.actions.updateCourse(id, courseData,  {emailAddress, password})
    .then( errors => {
      console.log(id)

      if (errors.length) {
         console.log('errors exist')
          //if there are errors, set the errors state
          this.setState({ errors });
      }
       else {
          console.log('no errors')
          //if there aren't any errors, redirect to the course detail page
          this.props.history.push(`/courses/${id}`);
      }
  })
  .catch( err => {
      console.log(err);
      this.props.history.push('/error');
  })   
}

  cancel = () => {
      //In my cancel method, I simply redirect the user to the course page. 
    const {id} = this.state.course.course;
    this.props.history.push(`/courses/${id}`);
  }
}

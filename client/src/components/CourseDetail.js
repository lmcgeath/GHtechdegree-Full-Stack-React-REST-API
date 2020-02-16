// // This component provides the "Course Detail" screen by retrieving the detail for a course from the REST API's /api/courses/:id route and rendering the course. The component also renders a "Delete Course" button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course. This component also renders an "Update Course" button for navigating to the "Update Course" screen.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const ReactMarkdown = require('react-markdown');

export default class CourseDetail extends Component {
    state = {
        course: [],
        courseOwner: []
    };
    
    componentDidMount() {
        //retrieves course data from the API
        const courseId = this.props.match.params.id;
        this.props.context.actions.getCourse(courseId)
            .then(responseData => {
                if (responseData !== null) {
                    //sets course state if course found
                    this.setState({ 
                        course: responseData.course, 
                        courseOwner: responseData.course.User
                        
                    });

                } else {
                    //redirects user if course not found
                  //   this.props.history.push('/notfound');
                }
            })
                  .catch(error => {
                     console.log(error);
                     this.props.history.push('/error');
            });
      
    };

    deleteCourse = (courseId) => {
        //deletes a course
        this.props.context.actions.deleteCourse(courseId)
            .then(response => {
                if (response.status === 204) {
                    //redirects to course list if course successfully deleted
                    this.props.history.push('/courses');
                } else if (response.status === 404) {
                    //redirects to notFound if course doesn't exist
                  //   this.props.history.push('/notfound');
                } else if (response.status === 403) {
                    //redirects to forbidden if current user doesn't own the course
                    this.props.history.push('/forbidden');
                }
            })
            .catch(error => {
                console.log(error);
                this.props.history.push('/error');
            })
    }

    render() {
        const { 
            course, 
            courseOwner 
        } = this.state;

        return (
            <div>
                <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                            <ButtonsDisplay authenticatedUser={this.props.context.authenticatedUser}
                                       courseOwner={courseOwner}
                                       courseId={this.props.match.params.id}
                                       deleteCourse={this.deleteCourse} />
                            
                        </div>
                    </div>
                </div>
                <div className="bounds course--detail">
                    <div className="grid-66">
                        <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <h3 className="course--title">{course.title}</h3>
                            <p>By {courseOwner.firstName} {courseOwner.lastName}</p>
                        </div>
                        <div className="course--description">
                            <ReactMarkdown source={course.description} />
                        </div>
                    </div>
                    <div className="grid-25 grid-right">
                        <div className="course--stats">
                            <ul className="course--stats--list">
                                <li className="course--stats--list--item">
                                    <h4>Estimated Time</h4>
                                    <h3>{course.estimatedTime}</h3>
                                </li>
                                <li className="course--stats--list--item">
                                    <h4>Materials Needed</h4>
                                    <ReactMarkdown source={course.materialsNeeded} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//conditionally renders the Update Course and Delete Course buttons and only displays them if the current user is the course owner
const ButtonsDisplay = (props) => {
    const {
        authenticatedUser,
        courseOwner,
        courseId,
        deleteCourse
    } = props
    let buttonsDisplay;
    if (authenticatedUser) {
        if (authenticatedUser.id === courseOwner.id) {
            buttonsDisplay = (
                <span>
                    <Link to={`/courses/${courseId}/update`} className="button">Update Course</Link>
                    <button onClick={() => {deleteCourse(courseId)}} className="button">Delete Course</button>
                    <Link to="/courses" className="button button-secondary">Return to List</Link>
                </span>
            )
        } else {
         buttonsDisplay = <span><Link to="/courses" className="button button-secondary">Return to List</Link></span>
      }
    } else {
      buttonsDisplay = <span><Link to="/courses" className="button button-secondary">Return to List</Link></span>
   }

    return buttonsDisplay;   
}

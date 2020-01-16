//- Courses - This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Courses extends Component {
   state = {
       courses: []
   };
   
   componentDidMount() {
      // const { context } = this.props;
       //retrieves all course data from the API
       this.props.context.actions.getCourses()
           .then(responseData => {
               //sets courses state if successful
               this.setState({ courses: responseData });
           })
           .catch(error => {
               console.log(error);
               this.props.history.push('/error');
           });
   };
   
   render () {
       const courseList = this.state.courses.map(course =>
           <div key={course.id} className="grid-33">
               <Link to={`/courses/${course.id}`} className="course--module course--link">
                   <h4 className="course--label">Course</h4>
                   <h3 className="course--title">{course.title}</h3>
               </Link>
           </div>
       )

       return (
        
           <div className="bounds">
               {courseList}
               <div className="grid-33">
                   <Link to="/courses/create" className="course--module course--add--module">
                       <h3 className="course--add--title">
                           <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                               viewBox="0 0 13 13" className="add">
                               <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                           </svg>
                           New Course
                       </h3>
                   </Link>
               </div>
           </div>
       );
   }
}

export default Courses;
import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch
 } from 'react-router-dom';

import withContext from './Context';
import Courses from './components/Courses';
import Header from './components/Header';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import CreateCourse from './components/CreateCourse';



const CoursesWithContext = withContext(Courses);
const HeaderWithContext = withContext(Header);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);





const App = () => (
   <Router>
      <div>
        <HeaderWithContext />
      <Switch>
         <Route exact path='/' component={CoursesWithContext}/>
         <Route exact path='/courses' component={CoursesWithContext} />
         <Route exact path='/courses/create' component={CreateCourseWithContext} />
         <Route exact path='/courses/:id' component={CourseDetailWithContext} />
         <Route exact path='/signin' component={UserSignInWithContext} />
         <Route exact path='/signup' component={UserSignUpWithContext} />
         <Route exact path='/signout' component={UserSignOutWithContext} />
         
         
      </Switch>
      </div>
   </Router>
);

export default App;




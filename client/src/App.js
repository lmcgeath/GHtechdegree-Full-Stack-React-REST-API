import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch
 } from 'react-router-dom';
//imports components
import withContext from './Context';
import Courses from './components/Courses';
import Header from './components/Header';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import PrivateRoute from './PrivateRoute';
import UnhandledError from './components/UnhandledError';
import Forbidden from './components/Forbidden';
import NotFound from './components/NotFound';


const CoursesWithContext = withContext(Courses);
const HeaderWithContext = withContext(Header);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);


const App = () => (
   <Router>
      <div>
        <HeaderWithContext />
      <Switch>
         <Route exact path='/' component={CoursesWithContext}/>
         <Route exact path='/courses' component={CoursesWithContext} />
         <PrivateRoute exact path='/courses/create' component={CreateCourseWithContext} />
         <Route exact path='/signin' component={UserSignInWithContext} />
         <Route exact path='/signup' component={UserSignUpWithContext} />
         <Route exact path='/signout' component={UserSignOutWithContext} />
         <PrivateRoute exact path='/courses/:id/update' component={UpdateCourseWithContext} />
         <Route exact path='/courses/:id' component={CourseDetailWithContext} />
         <Route path="/error" component={UnhandledError} />
         <Route path="/forbidden" component={Forbidden} />
         <Route path="/notfound" component={NotFound} />
         <Route component={NotFound} />           
      </Switch>
      </div>
   </Router>
);

export default App;




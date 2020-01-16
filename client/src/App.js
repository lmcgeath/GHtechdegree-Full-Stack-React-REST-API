import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Switch
 } from 'react-router-dom';
import './App.css';
import withContext from './Context';
import Courses from './components/Courses';
import Header from './components/Header';

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);


export default () => (
   <Router>
     <div>
      {/* <HeaderWithContext /> */}

       <Switch>
         <Route exact path="/courses" component={CoursesWithContext} />}
         {/* <PrivateRoute path="/authenticated" component={AuthWithContext} /> */}
         {/* <Route path="/signin" component={UserSignInWithContext} /> */}
         {/* <Route path="/signup" component={UserSignUpWithContext} /> */}
         {/* <Route path="/signout" component={UserSignOutWithContext} /> */}
         {/* <Route component={NotFound} /> */}
      </Switch>

    </div>
   </Router>
  );




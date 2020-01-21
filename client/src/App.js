import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Switch
 } from 'react-router-dom';

import withContext from './Context';
import Courses from './components/Courses';
import Header from './components/Header';

const CoursesWithContext = withContext(Courses);
const HeaderWithContext = withContext(Header);


const App = () => (
   <Router>
      <div>
        <HeaderWithContext />
      <Switch>
         <Route exact path='/' component={CoursesWithContext}/>
         <Route exact path='/courses' component={CoursesWithContext} />
         
      </Switch>
      </div>
   </Router>
);

export default App;




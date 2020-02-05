// Create the following stateless functional components:
   // Header- Displays the top menu bar for the application and includes buttons for signing in and signing up (if there's not an authenticated user) or the user's first and last name and a button for signing out (if there's an authenticated user).
//brought in from index.html markup file
import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
   render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
     return (
       <div className="header">
         <div className="bounds">
           <h1 className="header--logo">Courses</h1>
           <nav>
           {authUser ?
             <React.Fragment>
                <span>Welcome, {authUser.firstName}!</span>
                <Link className="signout" to="/signout" >Sign Out</Link>
             </React.Fragment>
             :
             <React.Fragment>
               <Link className="signup" to="/signup">Sign Up</Link>
               <Link className="signin" to="/signin">Sign In</Link>
             </React.Fragment>
           }
           </nav>
         </div>
       </div>
     );
   }
 };
 
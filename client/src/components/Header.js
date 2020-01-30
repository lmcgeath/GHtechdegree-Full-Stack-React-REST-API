// Create the following stateless functional components:
   // Header- Displays the top menu bar for the application and includes buttons for signing in and signing up (if there's not an authenticated user) or the user's first and last name and a button for signing out (if there's an authenticated user).
//brought in from index.html markup file
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
return(
<body>
  <div id="root">
    <div>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><a className="signup" href="sign-up.html">Sign Up</a><a className="signin" href="sign-in.html">Sign In</a></nav>
        </div>
      </div>
   </div>
</div>

</body>
)
};

export default Header;


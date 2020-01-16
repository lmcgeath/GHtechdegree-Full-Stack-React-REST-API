'use strict';

const express = require('express');

const bcryptjs = require('bcryptjs');
const auth = require('basic-auth');
const User = require('../models').User;

const authenticateUser = async (req, res, next) => {
   try {
   let message = null;
   // Parse the user's credentials from the Authorization header.
   const credentials = auth(req);
     // If the user's credentials are available...
     if (credentials) {
       // Attempt to retrieve the user from the data store
       // by their email address (i.e. the user's "key"
       // from the Authorization header).
       //credentials.name comes from username field submitted
       const user = await User.findOne({
             where: {
               emailAddress: credentials.name
             }
           });
 
       // If a user was successfully retrieved from the data store...
       if (user) {
         // Use the bcryptjs npm package to compare the user's password
         // (from the Authorization header) to the user's password
         // that was retrieved from the data store.
         const authenticated = bcryptjs
           .compareSync(credentials.pass, user.password);
 
           // If the passwords match...
            if (authenticated) {
               console.log(`Authentication successful for username: ${user.emailAddress}`);
              // Then store the retrieved user object on the request object
              // so any middleware functions that follow this middleware function
              // will have access to the user's information.
              req.currentUser = user;
            } else {
              message = `Authentication failure for username: ${user.emailAddress}`;
            }
          } else {
            message = `User not found for username: ${credentials.emailAddress}`;
          }
        } else {
          message = 'Auth header not found';
        }
    // If user authentication failed...
    if (message) {
      console.warn(message);
 
      // Return a response with a 401 Unauthorized HTTP status code.
      res.status(401).json({ message: 'Access Denied' });
    } else {
      // Or if user authentication succeeded...
      // Call the next() method.
      next();
    }
  } catch (error){
    next(error);
  }
 };

 //Learned name of file cannot match name of exported function
 module.exports =  authenticateUser;
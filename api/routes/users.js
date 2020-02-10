'use strict';

const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const auth = require('basic-auth');
const User = require('../models').User;
const authenticateUser = require('../middleware/authUser.js')

// Construct a router instance.
const router = express.Router();
 
/* Handler function to wrap each route. */
function asyncHandler(cb){
   return async(req, res, next) => {
     try {
       await cb(req, res, next)
     } catch(error){
       res.status(500).send(error);
     }
   }
 }

//Returns the currently authenticated user
router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
   const user = req.currentUser;
 
   res.json({
     firstName: user.firstName,
     lastName: user.lastName,
     id: user.id,
     emailAddress: user.emailAddress
   });
 }));

 //Creates a user, sets the Location header to "/", and returns no content
router.post('/users', (async (req, res) => {
   let user;
   try {
      // Gets the user info from the request body--destructuring.
    let { firstName, lastName, emailAddress, password } = req.body;
      // Hashes the new user's password.
      if (password){
         password = bcryptjs.hashSync(password)
      }
      user = await User.create({
         firstName,
         lastName,
         emailAddress,
         password
       });
      res.location('/')
     .status(201).end();
   } catch (error) {
     if(error.name === "SequelizeValidationError" || "SequelizeUniqueConstraintError") { // checking the error
      res.status(400).json({ errors: error.message})
      } else {
        return error; // error caught in the asyncHandler's catch block
       }  
     }
}))

module.exports = router;
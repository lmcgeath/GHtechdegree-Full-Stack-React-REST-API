'use strict';

const express = require('express');
// Create the Express app
const app = express();
// Imports authenticate user function
const authenticateUser = require('../middleware/authUser.js')
const { check, validationResult } = require('express-validator');

// Imports sequelize model
const Course = require('../models').Course;
const User = require('../models').User;

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


//Returns a list of all courses and the users  with them in json format
router.get('/courses', asyncHandler(async (req, res) => {
   const courses = await Course.findAll({ 
      include: [{
         model: User,
         as: 'User',
         attributes: ['id', 'firstName', 'lastName'] 
       }]
   });
  res.json({courses})
  .status(200).end();
}));

//Returns a the course for the provided course ID and the user associated with it
router.get('/courses/:id', asyncHandler(async (req, res) => {
   const course = await Course.findByPk(req.params.id, {
      include: [{
         model: User,
         as: 'User',
         attributes: ['id', 'firstName', 'lastName'] 
       }]
   });
    if (course) {
    res.status(200).json({course});
  } else {
    res.sendStatus(404);
  }
}));

// Creates a course, sets the Location header to the URI for the course, and returns no content
router.post('/courses', authenticateUser, asyncHandler(async (req, res, next) => {
   let course;
   try {
     course = await Course.create(req.body);
     res.location(`/courses/${course.id}`)
     .status(201).end();
   } catch (error) {
     if(error.name === "SequelizeValidationError") { // checking the error
      const errorMessages = error.errors.map(error => error.message);
      res.status(400).json({ errors: errorMessages });
      } else {
         throw error; // error caught in the asyncHandler's catch block
       }  
     }
}))

// Updates a course and validates request
router.put('/courses/:id', authenticateUser,  
   check('title')
     .exists()
     .withMessage('Please provide a value for "title"'),
   check('description')
     .exists()
     .withMessage('Please provide a value for "description"'),
  (async (req, res) => {
   let course;
   try {
      course = await Course.findByPk(req.params.id);
      if (course){
         //checks whether title and description are filled in and prevents an update if not
         if(req.body.title && req.body.description){
            await course.update(req.body)
            res.location(`/courses/${course.id}`)
            .status(204).end();
      }
         // Attempt to get the validation result from the Request object.
      const errors = validationResult(req);
         
      // If there are validation errors...
  if (!errors.isEmpty()) {
    // Use the Array `map()` method to get a list of error messages.
    const errorMessages = errors.array().map(error => error.msg);

    // Return the validation errors to the client.
    res.status(400).json({ errors: errorMessages });
  }
   }  else {
      res.status(404).json({
        message: 'Course Not Found',
        });
      } 
   }
   catch (error) {
      
     }
}))

// Deletes a course and returns no content
router.delete('/courses/:id', authenticateUser, asyncHandler(async (req, res, next) => {
   let course;
      try {
         const course = await Course.findByPk(req.params.id);
         if (course) {
            await course.destroy()
            res.status(204).end();
           } 
         else {
           res.status(404).json({
             message: 'Course Not Found',
             });
         }
      } catch (error) {
         return next(error);
       }
     }));

module.exports = router;
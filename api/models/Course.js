'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Course extends Sequelize.Model {}
  Course.init({
   userId: {
      type: Sequelize.STRING,
      allowNull: false, // disallow null
      validate: { 
         notNull: {
            msg: 'Please provide a value for "user ID"',
          },
         notEmpty: {
            // custom error message
          msg: 'Please provide a value for "user ID"',
         }
      },
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false, // disallow null
      validate: { 
         notNull: {
            msg: 'Please provide a value for "title"',
          },
         notEmpty: {
            // custom error message
          msg: 'Please provide a value for "title"',
         }
      },
    },

    description: {
      type: Sequelize.TEXT,
      allowNull: false, // disallow null
      validate: { 
         notNull: {
            msg: 'Please provide a value for "description"',
          },
         notEmpty: {
            // custom error message
          msg: 'Please provide a value for "description"',
         }
      },
    }, 

    estimatedTime: {
      type: Sequelize.STRING,
      defaultValue: false, // set default value
    },
   
    materialsNeeded: {
      type: Sequelize.STRING,
     } 
   },  { sequelize });

   Course.associate = (models) => {
      Course.belongsTo(models.User, {
      //   as: 'director', // alias
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    };

  return Course;
   };
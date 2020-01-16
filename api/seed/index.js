'use strict';

const Sequelize = require('sequelize');
const promiseFinally = require('promise.prototype.finally');
const Database = require('./database');
const data = require('./data.json');

const enableLogging = process.env.DB_ENABLE_LOGGING === 'true';
const database = new Database(data, enableLogging);

const options = {
   dialect: 'sqlite',
   storage: 'fsjstd-restapi.db',
 };

const sequelize = new Sequelize(options);

const models = {};

promiseFinally.shim();

database.init()
  .catch(err => console.error(err))
  .finally(() => process.exit());

module.exports = {
   sequelize,
   Sequelize,
   models,
 };
 

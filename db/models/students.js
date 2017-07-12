'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const DataTypes = db.Sequelize;

module.exports = db.define('students', {
  name: {
  	type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  }
});


'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const DataTypes = db.Sequelize;


module.exports = db.define('campuses', {
  name: {
  	type: DataTypes.STRING
  },
  image:{
    type: DataTypes.STRING
  },
  email:{
  	type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  }
});
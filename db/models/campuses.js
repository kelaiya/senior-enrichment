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
},{
  instanceMethods: {
    getStudent: function () {
      return db.model('student').findAll({
          include: [{
            model: db.model('campus'),
            where: { id: this.id } // makes this entire query an inner join
          }]
      });
    }
  }
});
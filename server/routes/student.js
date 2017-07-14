const express = require('express');
const router = express.Router();
const mime = require('mime');
var models = require('../../db/models');
var Student = require('../../db/models/students');
const campus = require('../../db/models/campuses');
module.exports = router;

router.get('/', function (req, res, next) {
  Student.findAll({ where: req.query })
  .then(student => res.json(student))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Student.create(req.body)
  .then(student => res.status(201).json(student))
  .catch(next);
});

router.param('studentId', function (req, res, next, id) {
  Student.findById(id)
  .then(function (student) {
    if (!student) {
      const err = Error('Student not found');
      err.status = 404;
      throw err
    }
    req.student = student;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

router.get('/:studentId', function (req, res) {
  res.json(req.student);
});

router.put('/:studentId', function (req, res, next) {
  req.student.update(req.body)
  .then(student => res.status(200).json(student))
  .catch(next);
});

router.delete('/:studentId', function (req, res, next) {
  req.student.destroy()
  .then(() => res.status(204).end())
  .catch(next);
});

// router.get('/:campusId', function (req, res, next) {
//   Campus.findById({
//     where: {
//       campusId: req.params.campusId
//     }
//   })
//   .then( campus => res.send(campus))
//   .catch(next);
  
// });
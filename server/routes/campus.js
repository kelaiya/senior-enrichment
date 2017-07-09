const express = require('express');
const router = express.Router();
var models = require('../../db/models');
var Campus = require('../../db/models/campuses');

router.get('/', function (req, res, next) {
  Campus.findAll({ where: req.query })
  .then(campus => res.json(campus))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
  .then(campus => res.status(201).json(campus))
  .catch(next);
});

router.param('campusId', function (req, res, next, id) {
  Album.findById(id)
  .then(function (campus) {
    if (!campus) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err
    }
    req.campus = campus;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

router.get('/:campusId', function (req, res) {
  res.json(req.campus);
});

router.put('/:campusId', function (req, res, next) {
  req.campus.update(req.body)
  .then(campus => res.status(200).json(campus))
  .catch(next);
});

router.delete('/:campusId', function (req, res, next) {
  req.campus.destroy()
  .then(() => res.status(204).end())
  .catch(next);
});
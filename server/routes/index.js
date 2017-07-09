const router = require('express').Router();
module.exports = router;

router.use('/student', require('./student'));
router.use('/campus', require('./campus'));

router.use(function (req, res) {
  res.status(404).end();
});
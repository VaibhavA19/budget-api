const {
  StatusCodes
} = require('http-status-codes');
const {
  validationResult
} = require('express-validator');

const router = require('express').Router();
const User = require('../../models/userModel');
const validation = require('../../validations/user');

router.route('/user')
  .get((req, res) => {
    const query = {};
    if (req.query.userName) {
      query.userName = req.query.userName;
    }
    User.find(query, (err, users) => {
      if (err) {
        return res.send({
          error: err.message
        });
      }
      return res.json(users);
    });
  })
  .post(validation.create(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        error: errors.errors.map((e) => e.msg).join('.')
      });
    }
    const user = new User(req.body);
    user.save((err, doc) => {
      if (err) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
          error: err.message
        });
      }
      return res.status(StatusCodes.CREATED).json(doc);
    });
  });

module.exports = router;

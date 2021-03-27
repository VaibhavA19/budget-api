const {
  StatusCodes
} = require('http-status-codes');
const router = require('express').Router();
const User = require('../../models/userModel');

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
  .post((req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
      if (err) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
          error: err.message
        });
      } else {
        res.status(StatusCodes.CREATED).json(doc);
      }
    });
  });

module.exports = router;

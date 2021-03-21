const router = require('express').Router();
const User = require('../../models/userModel');



router.route('/user')
  .get((req, res) => {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }
    User.find(query, (err, users) => {
      if (err) {
        return res.send(err);
      }
      return res.json(users);
    });
  })
  .post((req, res) => {
    const user = new User(req.body);
    user.save();
    console.log(req.body);
    res.status(201).json(user);
  });

module.exports = router;

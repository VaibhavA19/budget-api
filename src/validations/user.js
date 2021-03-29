const {
  body
} = require('express-validator');
const currency = require('../models/currencyModel');
const User = require('../models/userModel');

module.exports = {
  create: () => [
    body('emailId', 'email is not valid').not().isEmpty().isEmail()
      .custom((value) => User.find({
        emailId: value
      }).then((email) => {
        if (email.length > 0) {
          throw new Error('Email already taken');
        }
      })),
    body('prefferedCurrency').not().isEmpty().custom((value) => currency.find({}).then((currencies) => {
      if (!currencies.map((c) => c.code).includes(value)) {
        return Promise.reject(new Error('preffered currency is invalid'));
      }
      return Promise.resolve();
    }).catch((err) => Promise.reject(err))),
    body('userName', 'unique userName is required').not().isEmpty().custom((value) => User.find({
      userName: value
    }).then((user) => {
      if (user.length > 0) {
        throw new Error('Username already exists');
      }
    }))
  ]
};

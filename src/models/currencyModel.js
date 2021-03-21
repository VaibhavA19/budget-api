const mongoose = require('mongoose');

const currencyModel = mongoose.Schema({
  countryName: {
    type: String,
    required: true,
    immutable: true,
    minLength: 4
  },
  currencyCode: {
    type: String,
    required: true,
    immutable: true,
    minLength: 3,
    maxLength: 3
  },
  currencyName: {
    type: String,
    required: true,
    immutable: true,
    minLength: 3,
    maxLength: 30
  },
  currencyNumber: {
    type: String,
    required: true,
    immutable: true,
    minLength: 3,
    maxLength: 3
  }
});

module.exports = mongoose.model('Currency', currencyModel);

const mongoose = require('mongoose');
const connection = require('./connections');

const currencyModel = mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    immutable: true,
    maxLength: 5
  },
  code: {
    type: String,
    required: true,
    immutable: true,
    minLength: 3,
    maxLength: 3
  },
  name: {
    type: String,
    required: true,
    immutable: true,
    minLength: 3,
    maxLength: 30
  },
  precision: {
    type: Number,
    required: false,
    immutable: false,
    default: 0
  }
});

const dbConnection = connection('mongodb://127.0.0.1:27017/currencyDB');
module.exports = dbConnection.model('Currency', currencyModel);

const mongoose = require('mongoose');
const connection = require('./connections');

const userModel = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    immutable: true
  },
  prefferedCurrency: {
    type: String,
    default: 'INR',
    trim: true,
    uppercase: true
  },
  emailId: {
    type: String,
    required: true,
    trim: true,
    immutable: true
  }
});

const dbConnection = connection('mongodb://127.0.0.1:27017/usersJSON');
module.exports = dbConnection.model('User', userModel);

const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userModel);

const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
  {
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
    },
    occupation: {
      type: String,
      trim: true
    },
    monthlyBudget: {
      type: Number,
      min: 0,
      default: 0
    },
    weeklyBudget: {
      type: Number,
      min: 0,
      default: 0
    },
    yearlyBudget: {
      type: Number,
      min: 0,
      default: 0
    }
  }
);

module.exports = mongoose.model('User', userModel);

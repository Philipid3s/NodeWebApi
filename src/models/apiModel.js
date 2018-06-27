import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a lst name'
  },
  email: {
    type: String,
    required: 'Enter an email'
  },
  company: {
    type: String,
    required: 'Enter a company'
  },
  phone: {
    type: Number,
    required: 'Enter a phone number'
  },

  created_data: {
    type: Date,
    default: Date.now
  }
});

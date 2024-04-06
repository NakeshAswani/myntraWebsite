// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating addressSchema & userRegistrationSchema
const addressSchema = new Schema({
  addressName: {
    type: String,
    required: true
  },
  addressPhone: {
    type: String,
    minLength: 10,
    required: true
  },
  Street: {
    type: String,
    required: true
  },
  City: {
    type: String,
    required: true
  },
  State: {
    type: String,
    required: true
  },
  Pincode: {
    type: Number,
    minLength: 6,
    required: true
  },
  Type: {
    type: String,
    required: true
  }
});

const userRegistrationSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Phone: {
    type: String,
    minLength: 10,
    required: true,
    unique: true
  },
  Address: [addressSchema],
  Password: {
    type: String,
    required: true
  },
}, { timestamps: true })

// creating and exporting userRegistrationModel
const userRegistrationModel = model("users", userRegistrationSchema)
module.exports = userRegistrationModel
// importing the necessary package
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// creating registrationSchema
const registrationSchema = Schema({
    Full_Name: {
        type: String,
        required: true,
        maxLength: 25
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Pincode: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
}, { timestamps: true })

// creating and exporting registrationModel
const registrationModel = model("users", registrationSchema)
module.exports = registrationModel
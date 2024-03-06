// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating userRegistrationSchema
const userRegistrationSchema = new Schema({
    Full_Name: {
        type: String,
        required: true,
        maxLength: 25
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
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

// creating and exporting userRegistrationModel
const userRegistrationModel = model("users", userRegistrationSchema)
module.exports = userRegistrationModel
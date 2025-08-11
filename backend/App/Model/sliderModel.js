// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating sliderSchema
const sliderSchema = new Schema({
    sliderNumber:{
        type: Number,
        required: true
    },
    sliderName: {
        type: String,
        required: true,
        lowercase: true
    },
    sliderDescription: {
        type: String,
        required: true,
        lowercase: true
    },
    sliderImage: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
}, { timestamps: true })

// creating and exporting sliderModel
let sliderModel = model("sliderTable", sliderSchema)
module.exports = sliderModel
// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating colorSchema
const colorSchema = new Schema({
    colorName: {
        type: String,
        required: true,
        unique: true
    },
    colorDescription: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
}, { timestamps: true })

// creating and exporting colorModel
const colorModel = model("colorTable", colorSchema)
module.exports = colorModel
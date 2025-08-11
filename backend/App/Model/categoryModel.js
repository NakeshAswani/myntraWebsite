// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating categorySchema
const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    categoryDescription: {
        type: String,
        required: true,
        lowercase: true
    },
    categoryImage: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
}, { timestamps: true })

// creating and exporting categoryModel
const categoryModel = model("categoryTable", categorySchema)
module.exports = categoryModel
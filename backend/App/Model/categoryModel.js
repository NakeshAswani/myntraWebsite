const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: true
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

let categoryModel = model("categoryTable", categorySchema)

module.exports = categoryModel
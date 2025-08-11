// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating subCategorySchema
const subCategorySchema = new Schema({
    subCategoryName: {
        type: String,
        required: true,
        lowercase: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "categoryTable",
        required: true
    },
    subCategoryDescription: {
        type: String,
        required: true,
        lowercase: true
    },
    subCategoryImage: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
}, { timestamps: true })

// creating and exporting subCategoryModel
const subCategoryModel = model("subCategoryTable", subCategorySchema)
module.exports = subCategoryModel
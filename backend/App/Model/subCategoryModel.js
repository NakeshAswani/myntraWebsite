const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

const subCategorySchema = new Schema({
    subCategoryName: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "categoryTable",
        required: true
    },
    subCategoryDescription: {
        type: String,
        required: true
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

let subCategoryModel = model("subCategoryTable", subCategorySchema)

module.exports = subCategoryModel
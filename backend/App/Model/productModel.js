// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating productSchema
const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    subCategoryName: {
        type: String,
        required: true
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "subCategoryTable",
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productColor: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
}, { timestamps: true })

// creating and exporting productModel
const productModel = model("productTable", productSchema)
module.exports = productModel
// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating productSchema
const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        lowercase: true
    },
    categoryName: {
        type: String,
        required: true,
        lowercase: true
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "subCategoryTable",
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
        lowercase: true
    },
    finalPrice: {
        type: Number,
        required: true,
        lowercase: true
    },
    productDescription: {
        type: String,
        required: true,
        lowercase: true
    },
    productRating: {
        type: Number,
        required: true
    },
    ratingCount: {
        type: String,
        required: true,
        lowercase: true
    },
    productColor: {
        type: String,
        required: true,
        lowercase: true
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
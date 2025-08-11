// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating cartSchema
const cartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "productTable",
        required: true
    },
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
    subCategoryName: {
        type: String,
        required: true,
        lowercase: true
    },
    productDescription: {
        type: String,
        required: true,
        lowercase: true
    },
    productColor: {
        type: String,
        required: true,
        lowercase: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    finalPrice: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    totalAmount: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
}, { timestamps: true })

// creating and exporting cartModel
const cartModel = model("cartTable", cartSchema)
module.exports = cartModel
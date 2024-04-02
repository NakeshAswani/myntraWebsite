// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating orderSchema
const orderSchema = new Schema({
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
    productColor: {
        type: String,
        required: true,
        lowercase: true
    },
    productImage: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true,
        lowercase: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: String,
        required: true,
        lowercase: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
}, { timestamps: true })

// creating and exporting orderModel
const orderModel = model("orderTable", orderSchema)
module.exports = orderModel
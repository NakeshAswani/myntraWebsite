// importing the necessary package
const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

// creating orderSchema
const orderSchema = new Schema({
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
    productPrice: {
        type: String,
        required: true
    },
    productColor: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: String,
        required: true
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
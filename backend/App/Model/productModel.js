const { default: mongoose } = require("mongoose");
const { Schema, model } = mongoose;

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
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "categoryTable",
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

let productModel = model("productTable", productSchema)

module.exports = productModel
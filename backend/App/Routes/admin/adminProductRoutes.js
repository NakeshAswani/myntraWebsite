// importing the necessary packages and files
const express=require("express");
const multer = require("multer")
let path = require("path");
const { addProduct, viewProduct, deleteProduct } = require("../../Controller/admin/adminProductController");

// creating a adminProductRoutes variable
const adminProductRoutes=express.Router();

// multer image storage code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Products');
    },
    filename: function (req, file, cb) {
        const fileName = 'product_image_' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})
const upload = multer({ storage: storage }).single('productImage');

// using adminProductRoutes variable to create routes
adminProductRoutes.post("/add-product/:id?",upload,addProduct);
adminProductRoutes.get("/view-product",viewProduct);
adminProductRoutes.post("/delete-product/:id",deleteProduct)

// exporting adminProductRoutes variable
module.exports=adminProductRoutes;
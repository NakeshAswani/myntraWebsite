// importing the necessary package
const express=require("express");
const multer = require("multer")
let path = require("path");
const { addProduct, viewProduct, deleteProduct } = require("../../Controller/admin/productController");

// creating a productRoutes variable
const productRoutes=express.Router();

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

productRoutes.post("/add-product",upload,addProduct);
productRoutes.get("/view-product",viewProduct);
productRoutes.get("/delete-product",deleteProduct)
// exporting productRoutes variable
module.exports=productRoutes;
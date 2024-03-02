// importing the necessary package
const express=require("express");
const multer = require("multer")
let path = require("path")

// creating a categoryRoutes variable
const categoryRoutes=express.Router();

// multer image storage code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Category')
    },
    filename: function (req, file, cb) {
        const fileName = 'category_image_' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
})
const upload = multer({ storage: storage }).single('categoryImage')

// exporting categoryRoutes variable
module.exports=categoryRoutes
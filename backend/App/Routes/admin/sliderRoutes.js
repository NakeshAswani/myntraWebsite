// importing the necessary package
const express=require("express");
const multer = require("multer")
let path = require("path")

// creating a sliderRoutes variable
const sliderRoutes=express.Router();

// multer image storage code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Slider')
    },
    filename: function (req, file, cb) {
        const fileName = 'slider_image_' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
})
const upload = multer({ storage: storage }).single('sliderImage')

// exporting sliderRoutes variable
module.exports=sliderRoutes
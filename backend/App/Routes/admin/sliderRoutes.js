// importing the necessary packages and files
const express=require("express");
const multer = require("multer")
let path = require("path");
const { addSlider, viewSlider, deleteSlider } = require("../../Controller/admin/sliderController");

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

// using sliderRoutes variable to create routes
sliderRoutes.post("/add-slider/:id?",upload,addSlider)
sliderRoutes.get("/view-slider",viewSlider)
sliderRoutes.post("/delete-slider/:id",deleteSlider)

// exporting sliderRoutes variable
module.exports=sliderRoutes
// importing the necessary packages and files
const express=require("express");
const multer = require("multer")
let path = require("path");
const { addSlider, viewSlider, deleteSlider, editSlider } = require("../../Controller/admin/adminSliderController");

// creating a adminSliderRoutes variable
const adminSliderRoutes=express.Router();

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

// using adminSliderRoutes variable to create routes
adminSliderRoutes.post("/add-slider/:id?",upload,addSlider)
adminSliderRoutes.get("/view-slider",viewSlider)
adminSliderRoutes.post("/delete-slider/:id",deleteSlider)
adminSliderRoutes.get("/edit-slider/:id", editSlider)

// exporting adminSliderRoutes variable
module.exports=adminSliderRoutes
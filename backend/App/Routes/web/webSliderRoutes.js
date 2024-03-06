// importing necessary pakages and files
const express=require("express");
const { viewSlider } = require("../../Controller/web/webSliderController");

// creating a webSliderRoutes variable
const webSliderRoutes=express.Router();

// using webSliderRoutes variable to create routes
webSliderRoutes.get("/view-slider",viewSlider)

// exporting webSliderRoutes variable
module.exports=webSliderRoutes;
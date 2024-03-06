// importing necessary pakages and files
const express=require("express");
const { viewCategory, viewSubCategory } = require("../../Controller/web/webCategoryController");

// creating a webCategoryRoutes variable
const webCategoryRoutes=express.Router();

// using webCategoryRoutes variable to create routes
webCategoryRoutes.get("/view-category",viewCategory)
webCategoryRoutes.get("/view-sub-category",viewSubCategory)

// exporting webCategoryRoutes variable
module.exports=webCategoryRoutes;
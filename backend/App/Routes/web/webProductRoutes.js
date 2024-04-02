// importing necessary pakages and files
const express=require("express");
const { viewProduct } = require("../../Controller/web/webProductController");

// creating a webProductRoutes variable
const webProductRoutes=express.Router();

// using webProductRoutes variable to create routes
webProductRoutes.get("/view-product",viewProduct)

// exporting webProductRoutes variable
module.exports=webProductRoutes;
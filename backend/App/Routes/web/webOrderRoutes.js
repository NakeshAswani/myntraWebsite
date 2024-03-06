// importing necessary pakages and files
const express=require("express");
const { addOrder, viewOrder } = require("../../Controller/web/webOrderController");

// creating a webOrderRoutes variable
const webOrderRoutes=express.Router();

// using webOrderRoutes variable to create routes
webOrderRoutes.get("/add-order",addOrder)
webOrderRoutes.get("/view-order/:id",viewOrder)

// exporting webOrderRoutes variable
module.exports=webOrderRoutes;
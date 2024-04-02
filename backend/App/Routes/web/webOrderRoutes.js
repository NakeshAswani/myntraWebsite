// importing necessary pakages and files
const express = require("express");
const multer = require("multer");
const path = require("path");
const { addOrder, viewOrder } = require("../../Controller/web/webOrderController");

// creating a webOrderRoutes variable
const webOrderRoutes = express.Router();

// using webOrderRoutes variable to create routes
webOrderRoutes.post("/add-order", addOrder)
webOrderRoutes.get("/view-order/:userId", viewOrder)

// exporting webOrderRoutes variable
module.exports = webOrderRoutes;
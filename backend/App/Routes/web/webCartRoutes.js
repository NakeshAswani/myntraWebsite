// importing necessary pakages and files
const express = require("express");
const multer = require("multer");
const path = require("path");
const { addCart, viewCart, deleteCart } = require("../../Controller/web/webCartController");

// creating a webCartRoutes variable
const webCartRoutes = express.Router();

// using webCartRoutes variable to create routes
webCartRoutes.post("/add-cart", addCart)
webCartRoutes.get("/view-cart/:userId", viewCart)
webCartRoutes.post("/delete-cart/:id", deleteCart)

// exporting webCartRoutes variable
module.exports = webCartRoutes;
// importing the necessary packages and files
const express = require("express");
const { addColor, viewColor, deleteColor } = require("../../Controller/admin/adminColorController");

// creating a adminColorRoutes variable
const adminColorRoutes = express.Router();

// using adminColorRoutes variable to create routes
adminColorRoutes.post("/add-color/:id?",addColor)
adminColorRoutes.get("/view-color",viewColor)
adminColorRoutes.post("/delete-color/:id",deleteColor)

// exporting adminColorRoutes variable
module.exports = adminColorRoutes
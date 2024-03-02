// importing the necessary packages and files
const express = require("express");
const { addColor, viewColor, deleteColor } = require("../../Controller/admin/colorController");

// creating a colorRoutes variable
const colorRoutes = express.Router();

// using colorRoutes variable to create routes
colorRoutes.post("/add-color/:id?",addColor)
colorRoutes.get("/view-color",viewColor)
colorRoutes.post("/delete-color/:id",deleteColor)

// exporting colorRoutes variable
module.exports = colorRoutes
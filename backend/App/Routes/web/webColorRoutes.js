// importing the necessary packages and files
const express = require("express");
const { viewColor } = require("../../Controller/web/webColorController");

// creating a webColorRoutes variable
const webColorRoutes = express.Router();

// using webColorRoutes variable to create routes
webColorRoutes.get("/view-color",viewColor)

// exporting webColorRoutes variable
module.exports = webColorRoutes
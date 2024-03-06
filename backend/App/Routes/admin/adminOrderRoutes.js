// importing the necessary packages and files
const express = require("express");
const { viewOrder, deleteOrder } = require("../../Controller/admin/adminOrderController")

// creating a adminOrderRoutes variable
const adminOrderRoutes = express.Router();

// using adminOrderRoutes variable to create routes
adminOrderRoutes.get("/view-orders", viewOrder)
adminOrderRoutes.post("/delete-orders/:id", deleteOrder)

// exporting adminOrderRoutes variable
module.exports = adminOrderRoutes
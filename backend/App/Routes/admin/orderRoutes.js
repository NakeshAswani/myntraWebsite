// importing the necessary packages and files
const express = require("express");
const { viewOrder, deleteOrder } = require("../../Controller/admin/orderController")

// creating a orderRoutes variable
const orderRoutes = express.Router();

// using orderRoutes variable to create routes
orderRoutes.get("/view-orders", viewOrder)
orderRoutes.post("/delete-orders/:id", deleteOrder)

// exporting orderRoutes variable
module.exports = orderRoutes
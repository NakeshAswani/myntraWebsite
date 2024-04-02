// importing necessary pakages and files
const express = require("express");
const { addUser, viewUser, checkUser, deleteUser, addAddress, editAddress, deleteAddress } = require("../../Controller/web/webUserController");

// creating a webUserRoutes variable
const webUserRoutes = express.Router();

// using webUserRoutes variable to create routes
webUserRoutes.post("/add-user/:id?", addUser)
webUserRoutes.get("/view-user/:userId", viewUser)
webUserRoutes.post("/check-user", checkUser)
webUserRoutes.get("/delete-user/:id", deleteUser)
webUserRoutes.post("/add-address/:userId", addAddress)
webUserRoutes.post("/edit-address/:userId", editAddress)
webUserRoutes.get("/delete-address/:userId", deleteAddress)

// exporting webUserRoutes variable
module.exports = webUserRoutes;
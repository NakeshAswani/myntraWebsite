// importing necessary pakages and files
const express=require("express");
const { addUser, viewUser } = require("../../Controller/web/webUserController");

// creating a webUserRoutes variable
const webUserRoutes=express.Router();

// using webUserRoutes variable to create routes
webUserRoutes.post("/add-user/:id?",addUser)
webUserRoutes.get("/view-user",viewUser)

// exporting webUserRoutes variable
module.exports=webUserRoutes;
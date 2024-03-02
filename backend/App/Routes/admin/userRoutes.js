// importing the necessary packages and files
const express=require("express");
const { viewUser, checkLogin } = require("../../Controller/admin/userController");

// creating a userRoutes variable
const userRoutes=express.Router();

// using userRoutes variable to create routes
userRoutes.get("/view-users",viewUser)
userRoutes.post("/check-login",checkLogin)

// exporting userRoutes variable
module.exports=userRoutes
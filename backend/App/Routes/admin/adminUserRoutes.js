// importing the necessary packages and files
const express=require("express");
const { viewUser, checkLogin } = require("../../Controller/admin/adminUserController");

// creating a adminUserRoutes variable
const adminUserRoutes=express.Router();

// using adminUserRoutes variable to create routes
adminUserRoutes.get("/view-users",viewUser)
adminUserRoutes.post("/check-login",checkLogin)

// exporting adminUserRoutes variable
module.exports=adminUserRoutes
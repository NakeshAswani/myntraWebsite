// importing the necessary package and files
const express=require("express");
const categoryRoutes = require("./Routes/admin/categoryRoutes");
const colorRoutes = require("./Routes/admin/colorRoutes");
const orderRoutes = require("./Routes/admin/orderRoutes");
const productRoutes = require("./Routes/admin/productRoutes");
const sliderRoutes = require("./Routes/admin/sliderRoutes");
const userRoutes = require("./Routes/admin/userRoutes");

// creating a router variable
const router=express.Router();

// default route
router.get("/",(request,response)=>{
    response.send("! Server is Working !");
})

// admin routes
router.use("/category",categoryRoutes);
router.use("/color",colorRoutes);
router.use("/order",orderRoutes);
router.use("/product",productRoutes);
router.use("/slider",sliderRoutes);
router.use("/user",userRoutes);

// web routes

// exporting router variable
module.exports=router
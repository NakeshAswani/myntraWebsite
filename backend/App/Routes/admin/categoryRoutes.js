// importing the necessary packages and files
const express=require("express");
const multer = require("multer")
let path = require("path");
const { addCategory, viewCategory, deleteCategory, editCategory, addSubCategory, viewSubCategory, deleteSubCategory, editSubCategory } = require("../../Controller/admin/categoryController");

// creating a categoryRoutes variable
const categoryRoutes=express.Router();

// multer image storage code
const catStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Category')
    },
    filename: function (req, file, cb) {
        const fileName = 'category_image_' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
})
const subCatStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/SubCategory')
    },
    filename: function (req, file, cb) {
        const fileName = 'sub_category_image_' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
})
const uploadCatImg = multer({ storage: catStorage }).single('categoryImage')
const uploadSubCatImg = multer({ storage: subCatStorage }).single('subCategoryImage')

// using categoryRoutes variable to create routes of category
categoryRoutes.post("/add-category/:id?",uploadCatImg,addCategory)
categoryRoutes.get("/view-category",viewCategory)
categoryRoutes.post("/delete-category/:id",deleteCategory)
categoryRoutes.post("/edit-category/:id",editCategory)
// using categoryRoutes variable to create routes of subCategory
categoryRoutes.post("/add-sub-category/:id?",uploadSubCatImg,addSubCategory)
categoryRoutes.get("/view-sub-category",viewSubCategory)
categoryRoutes.post("/delete-sub-category/:id",deleteSubCategory)
categoryRoutes.post("/edit-sub-category/:id",editSubCategory)

// exporting categoryRoutes variable
module.exports=categoryRoutes
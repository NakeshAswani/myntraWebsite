// importing the necessary packages and files
const express = require("express");
const multer = require("multer")
const path = require("path");
const { addCategory, viewCategory, deleteCategory, editCategory, addSubCategory, viewSubCategory, deleteSubCategory, editSubCategory } = require("../../Controller/admin/adminCategoryController");

// creating a adminCategoryRoutes variable
const adminCategoryRoutes = express.Router();

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

// using adminCategoryRoutes variable to create routes of category
adminCategoryRoutes.post("/add-category/:id?", uploadCatImg, addCategory)
adminCategoryRoutes.get("/view-category", viewCategory)
adminCategoryRoutes.post("/delete-category/:id", deleteCategory)
adminCategoryRoutes.post("/edit-category/:id", editCategory)
// using adminCategoryRoutes variable to create routes of subCategory
adminCategoryRoutes.post("/add-sub-category/:id?", uploadSubCatImg, addSubCategory)
adminCategoryRoutes.get("/view-sub-category", viewSubCategory)
adminCategoryRoutes.post("/delete-sub-category/:id", deleteSubCategory)
adminCategoryRoutes.post("/edit-sub-category/:id", editSubCategory)

// exporting adminCategoryRoutes variable
module.exports = adminCategoryRoutes
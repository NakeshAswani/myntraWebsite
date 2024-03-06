// importing necessary files
const categoryModel = require("../../Model/categoryModel")
const subCategoryModel = require("../../Model/subCategoryModel")

// category functions start
exports.viewCategory = async (request, response) => {
    let resObj
    try {
        const allData = await categoryModel.find()
        const categoryImageLink = "http://localhost:1323/Uploads/Category"
        resObj = {
            status: 1,
            message: "! data found !",
            categoryImageLink,
            data: allData
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! data not found !",
            data: error
        }
    }
    response.send(resObj)
}
// category functions end
// subCategory functions start
exports.viewSubCategory = async (request, response) => {
    let resObj
    try {
        const allData = await subCategoryModel.find()
        const subCategoryImageLink = "http://localhost:1323/Uploads/SubCategoty"
        resObj = {
            status: 1,
            message: "! data found !",
            subCategoryImageLink,
            data: allData
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! data not found !",
            data: error
        }
    }
    response.send(resObj)
}
// subCategory functions end
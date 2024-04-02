// importing necessary files
const { ObjectId } = require("mongodb")
const categoryModel = require("../../Model/categoryModel")
const subCategoryModel = require("../../Model/subCategoryModel")

// category functions start
exports.viewCategory = async (request, response) => {
    let resObj
    try {
        const allData = await categoryModel.find()
        const categoryImageLink = "http://localhost:1323/Uploads/Category/"
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
            error
        }
    }
    response.send(resObj)
}
// category functions end
// subCategory functions start
exports.viewSubCategory = async (request, response) => {
    const urlId = request.params.id ?? ""
    let resObj
    if (urlId == "") {
        try {
            const allData = await subCategoryModel.find().populate("categoryId")
            const subCategoryImageLink = "http://localhost:1323/Uploads/SubCategory/"
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
                error
            }
        }
    }
    else {
        try {
            const allData = await subCategoryModel.find({ categoryId: new ObjectId(urlId) }).populate("categoryId")
            const subCategoryImageLink = "http://localhost:1323/Uploads/SubCategory/"
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
                error
            }
        }
    }
    response.send(resObj)
}
// subCategory functions end
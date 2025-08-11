// importing the necessary packages and files
const { ObjectId } = require("mongodb")
const fs = require('fs').promises
const categoryModel = require("../../Model/categoryModel")
const subCategoryModel = require("../../Model/subCategoryModel")

// category functions start
exports.addCategory = async (request, response) => {
    const categoryName = request.body.categoryName
    const categoryDescription = request.body.categoryDescription
    let categoryImage
    const status = request.body.status
    const URLId = request.params.id ?? ""
    if (request.file === undefined) {
        if (URLId !== undefined || URLId !== "") {
            try {
                const categoryData = await categoryModel.findOne({ _id: new ObjectId(URLId) })
                categoryImage = categoryData.categoryImage
            }
            catch (error) {

            }
        }
        else {
            categoryImage = ""
        }
    }
    else {
        categoryImage = request.file.filename
    }
    const obj = {
        categoryName,
        categoryDescription,
        categoryImage,
        status,
    }
    let resObj
    if (URLId === "") {
        const finalRes = await categoryModel(obj)
        try {
            const insertData = await finalRes.save()
            resObj = {
                status: 1,
                message: "! data inserted !",
                data: insertData
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! fill all fields !",
                error
            }
        }
    }
    else {
        try {
            await categoryModel.updateOne({ _id: new ObjectId(URLId) }, { $set: obj })
            resObj = {
                status: 1,
                message: "! data updated successfully !"
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! data updation unsuccessfull !",
                error
            }
        }
    }
    response.send(resObj)
}

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

exports.deleteCategory = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        const categoryData = await categoryModel.findOneAndDelete({ _id: new ObjectId(deleteId) });
        if (categoryData.categoryImage) {
            const imagePath = `Uploads/Category/${categoryData.categoryImage}`
            await fs.unlink(imagePath);
        }
        resObj = {
            status: 1,
            message: "! data deleted !"
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! data deletion unsuccessfull !",
            error
        }
    }
    response.send(resObj)
}

exports.editCategory = async (request, response) => {
    const URLId = request.params.id
    let resObj
    try {
        const categoryData = await categoryModel.findOne({ _id: new ObjectId(URLId) })
        resObj = {
            status: 1,
            message: "! data found !",
            data: categoryData
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
exports.addSubCategory = async (request, response) => {
    const subCategoryName = request.body.subCategoryName
    const categoryId = request.body.categoryId
    const subCategoryDescription = request.body.subCategoryDescription
    let subCategoryImage
    const status = request.body.status
    const URLId = request.params.id ?? ""
    if (request.file === undefined) {
        if (URLId !== undefined || URLId !== "") {
            try {
                const subCategoryData = await subCategoryModel.findOne({ _id: new ObjectId(URLId) })
                subCategoryImage = subCategoryData.subCategoryImage
            }
            catch (error) {

            }
        }
        else {
            subCategoryImage = ""
        }
    }
    else {
        subCategoryImage = request.file.filename
    }
    const obj = {
        subCategoryName,
        categoryId,
        subCategoryDescription,
        subCategoryImage,
        status,
    }
    let resObj
    if (URLId === "") {
        const finalRes = await subCategoryModel(obj)
        try {
            const insertData = await finalRes.save()
            resObj = {
                status: 1,
                message: "! data inserted !",
                data: insertData
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! fill all fields !",
                error
            }
        }
    }
    else {
        try {
            await subCategoryModel.updateOne({ _id: new ObjectId(URLId) }, { $set: obj })
            resObj = {
                status: 1,
                message: "! data updated successfully !"
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! data updation unsuccessfull !",
                error
            }
        }
    }
    response.send(resObj)
}

exports.viewSubCategory = async (request, response) => {
    let resObj
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
    response.send(resObj)
}

exports.deleteSubCategory = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        const subCategoryData = await subCategoryModel.findOneAndDelete({ _id: new ObjectId(deleteId) });
        if (subCategoryData.subCategoryImage) {
            const imagePath = `Uploads/SubCategory/${subCategoryData.subCategoryImage}`
            await fs.unlink(imagePath);
        }
        resObj = {
            status: 1,
            message: "! data deleted !"
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! id not found !",
            error
        }
    }
    response.send(resObj)
}

exports.editSubCategory = async (request, response) => {
    const URLId = request.params.id
    let resObj
    try {
        const subCategoryData = await subCategoryModel.findOne({ _id: new ObjectId(URLId) })
        resObj = {
            status: 1,
            message: "! data found !",
            data: subCategoryData
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
// subCategory functions end
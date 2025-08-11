// importing the necessary packages and files
const { ObjectId } = require("mongodb")
const fs = require('fs').promises
const productModel = require("../../Model/productModel")

// product functions start
exports.addProduct = async (request, response) => {
    const productName = request.body.productName
    const categoryName = request.body.categoryName
    const subCategoryId = request.body.subCategoryId
    const productPrice = request.body.productPrice
    const finalPrice = request.body.finalPrice
    const productDescription = request.body.productDescription
    const productRating = request.body.productRating
    const ratingCount = request.body.ratingCount
    const productColor = request.body.productColor
    let productImage
    const status = request.body.status
    const URLId = request.params.id ?? ""
    if (request.file === undefined) {
        if (URLId !== undefined || URLId !== "") {
            try {
                const productData = await productModel.findOne({ _id: new ObjectId(URLId) })
                productImage = productData.productImage
            }
            catch (error) {

            }
        }
        else {
            productImage = ""
        }
    }
    else {
        productImage = request.file.filename
    }
    const obj = {
        productName,
        categoryName,
        subCategoryId,
        productPrice,
        finalPrice,
        productDescription,
        productRating,
        ratingCount,
        productColor,
        productImage,
        status,
    }
    let resObj
    if (URLId === "") {
        const finalRes = await productModel(obj)
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
            await productModel.updateOne({ _id: new ObjectId(URLId) }, { $set: obj })
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

exports.viewProduct = async (request, response) => {
    let resObj
    try {
        const allData = await productModel.find().populate("subCategoryId")
        const productImageLink = "http://localhost:1323/Uploads/Products/"
        resObj = {
            status: 1,
            message: "! data found !",
            productImageLink,
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

exports.deleteProduct = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        const productData = await productModel.findOneAndDelete({ _id: new ObjectId(deleteId) });
        if (productData.productImage) {
            const imagePath = `Uploads/Products/${productData.productImage}`
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

exports.editProduct = async (request, response) => {
    const URLId = request.params.id
    let resObj
    try {
        const productData = await productModel.findOne({ _id: new ObjectId(URLId) })
        resObj = {
            status: 1,
            message: "! data found !",
            data: productData
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
// product functions end
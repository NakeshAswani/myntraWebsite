// importing necessary packages and files
const { ObjectId } = require("mongodb")
const orderModel = require("../../Model/orderModel")

// order functions start
exports.addOrder = async (request, response) => {
    const productId = request.body.productId
    const productName = request.body.productName
    const categoryName = request.body.categoryName
    const subCategoryName = request.body.subCategoryName
    const productColor = request.body.productColor
    const productImage = request.body.productImage
    const productPrice = request.body.productPrice
    const quantity = request.body.quantity
    const totalAmount = request.body.totalAmount
    const userId = request.body.userId
    const obj = {
        productId,
        productName,
        categoryName,
        subCategoryName,
        productColor,
        productImage,
        productPrice,
        quantity,
        totalAmount,
        userId
    }
    let resObj
    try {
        const finalRes = await orderModel(obj)
        const insertData = await finalRes.save()
        resObj = {
            status: 1,
            message: "! order placed !",
            data: insertData
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! order not placed try again !",
            error
        }
    }
    response.send(resObj)
}

exports.viewOrder = async (request, response) => {
    const userId = request.params.userId
    let resObj
    try {
        const orderData = await orderModel.find({ userId: new ObjectId(userId) })
        const orderImageLink = "http://localhost:1323/Uploads/Products/"
        resObj = {
            status: 1,
            message: "! data found !",
            orderImageLink,
            data: orderData
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

exports.deleteOrder = async (request, response) => {
    const userId = request.params.userId
    let resObj
    try {
        const deleteData = await orderModel.deleteMany({ userId: new ObjectId(userId) })
        resObj = {
            status: 1,
            message: "! data deleted !",
            data: deleteData
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! data deletetion unsuccessfull !",
            error
        }
    }
    response.send(resObj)
}
// order functions end
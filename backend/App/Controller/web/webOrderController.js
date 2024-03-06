// importing necessary packages and files
const { ObjectId } = require("mongodb")
const orderModel = require("../../Model/orderModel")

// order functions start
exports.addOrder = async (request, response) => {
    const productName = request.body.productName
    const categoryName = request.body.categoryName
    const subCategoryName = request.body.subCategoryName
    const productPrice = request.body.productPrice
    const productColor = request.body.productColor
    const quantity = request.body.quantity
    const totalAmount = request.body.totalAmount
    const userId = request.body.userId
    const obj = {
        productName,
        categoryName,
        subCategoryName,
        productPrice,
        productColor,
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
            message: "! data inserted !",
            data: insertData
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! data not inserted !",
            data: error
        }
    }
    response.send(resObj)
}

exports.viewOrder = async (request, response) => {
    const userId = request.params.userId
    let resObj
    try {
        const orderData = await orderModel.find({ userId: new ObjectId(userId) })
        resObj = {
            status: 1,
            message: "! data found !",
            data: orderData
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
// order functions end
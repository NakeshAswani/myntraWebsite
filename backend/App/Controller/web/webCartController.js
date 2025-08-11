// importing necessary packages and files
const { ObjectId } = require("mongodb")
const cartModel = require("../../Model/cartModel")

// cart functions start
exports.addCart = async (request, response) => {
    const productId = request.body.productId
    const productName = request.body.productName
    const categoryName = request.body.categoryName
    const subCategoryName = request.body.subCategoryName
    const productDescription = request.body.productDescription
    const productColor = request.body.productColor
    const productPrice = request.body.productPrice
    const finalPrice = request.body.finalPrice
    const productImage = request.body.productImage
    const quantity = request.body.quantity
    const totalAmount = request.body.totalAmount
    const userId = request.body.userId
    const obj = {
        productId,
        productName,
        categoryName,
        subCategoryName,
        productDescription,
        productColor,
        productPrice,
        finalPrice,
        productImage,
        quantity,
        totalAmount,
        userId
    }
    let resObj
    if (await cartModel.findOne({ productId: new ObjectId(productId) })) {
        try {
            const updateData = await cartModel.updateOne({ productId: new ObjectId(productId) }, { $set: obj })
            resObj = {
                status: 1,
                message: "! item updated !",
                data: updateData
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! item not updated !",
                error
            }
        }
    }
    else {
        const finalRes = await cartModel(obj)
        try {
            const insertData = await finalRes.save()
            resObj = {
                status: 1,
                message: "! item added to cart !",
                data: insertData
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! item not added to cart try again !",
                error
            }
        }
    }
    response.send(resObj)
}
exports.viewCart = async (request, response) => {
    const userId = request.params.userId
    const cartImageLink = "http://localhost:1323/Uploads/Products/"
    let resObj
    try {
        const cartData = await cartModel.find({ userId: new ObjectId(userId) })
        resObj = {
            status: 1,
            message: "! data found !",
            cartImageLink,
            data: cartData
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
exports.deleteCart = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        const cartData = await cartModel.findOneAndDelete({ _id: new ObjectId(deleteId) });
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
// cart functions end
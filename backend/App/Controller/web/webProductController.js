// importing necessary packages and files
const { ObjectId } = require("mongodb")
const productModel = require("../../Model/productModel")

// product function start
exports.viewProduct = async (request, response) => {
    const subCategoryId = request.query.subCategoryId
    const productId = request.query.productId
    const productColor = request.query.productColor
    let resObj
    if (productId !== "" && productId !== undefined && productId !== null) {
        try {
            const productData=await productModel.findOne({_id: new ObjectId(productId)})
            const productImageLink = "http://localhost:1323/Uploads/Products"
            resObj={
                status: 1,
                message: "! data found !",
                productImageLink,
                data: productData
            }
        }
        catch (error) {
            resObj={
                status: 0,
                message: "! data not found !",
                data: error
            }
        }
    }
    else {
        if (productColor !== "" && productColor !== undefined && productColor !== null){
            try {
                const productData=await productModel.find({_id: new ObjectId(subCategoryId), productColor: productColor})
                const productImageLink = "http://localhost:1323/Uploads/Products"
                resObj={
                    status: 1,
                    message: "! data found !",
                    productImageLink,
                    data: productData
                }
            }
            catch (error) {
                resObj={
                    status: 0,
                    message: "! data not found !",
                    data: error
                }
            }
        }
        else{
            try {
                const productData=await productModel.find({_id: new ObjectId(subCategoryId)})
                const productImageLink = "http://localhost:1323/Uploads/Products"
                resObj={
                    status: 1,
                    message: "! data found !",
                    productImageLink,
                    data: productData
                }
            }
            catch (error) {
                resObj={
                    status: 0,
                    message: "! data not found !",
                    data: error
                }
            }
        }
    }
    response.send(resObj)
}
// product function end
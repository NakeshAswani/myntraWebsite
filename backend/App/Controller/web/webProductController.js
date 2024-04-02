// importing necessary packages and files
const { ObjectId } = require("mongodb")
const productModel = require("../../Model/productModel")

// product function start
exports.viewProduct = async (request, response) => {
    const subCategoryId = request.query.subCategoryId
    const categoryName = request.query.categoryName
    const productId = request.query.productId
    const productColor = request.query.productColor
    let resObj
    if (productId !== "" && productId !== undefined && productId !== null) {
        try {
            const productData = await productModel.findById(productId).populate("subCategoryId")
            const productImageLink = "http://localhost:1323/Uploads/Products/"
            resObj = {
                status: 1,
                message: "! data found !",
                productImageLink,
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
    }
    else {
        if (productColor !== "" && productColor !== undefined && productColor !== null) {
            try {
                const productData = await productModel.find({ subCategoryId: new ObjectId(subCategoryId), productColor: productColor })
                const productImageLink = "http://localhost:1323/Uploads/Products/"
                resObj = {
                    status: 1,
                    message: "! data found !",
                    productImageLink,
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
        }
        else {
            if (categoryName !== "" && categoryName !== undefined && categoryName !== null) {
                try {
                    const productData = await productModel.find({ categoryName: categoryName })
                    const productImageLink = "http://localhost:1323/Uploads/Products/"
                    resObj = {
                        status: 1,
                        message: "! data found !",
                        productImageLink,
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
            }
            else {
                try {
                    const productData = await productModel.find({ subCategoryId: new ObjectId(subCategoryId) })
                    const productImageLink = "http://localhost:1323/Uploads/Products/"
                    resObj = {
                        status: 1,
                        message: "! data found !",
                        productImageLink,
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
            }
        }
    }
    response.send(resObj)
}
// product function end
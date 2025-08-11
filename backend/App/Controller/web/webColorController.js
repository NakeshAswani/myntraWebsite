// importing necessary files
const colorModel = require("../../Model/colorModel")

exports.viewColor = async (request, response) => {
    let resObj
    try {
        const allData = await colorModel.find()
        resObj = {
            status: 1,
            message: "! data found !",
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
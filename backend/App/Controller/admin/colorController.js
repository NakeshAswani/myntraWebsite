// importing the necessary packages and files
const { ObjectId } = require("mongodb")
const colorModel = require("../../Model/colorModel")

// color functions start
exports.addColor = async (request, response) => {
    const colorName = request.body.colorName
    const colorDescription = request.body.colorDescription
    const status = request.body.status
    const URLId = request.params.id ?? ""
    const obj = {
        colorName,
        colorDescription,
        status,
    }
    let resObj
    if (URLId === "") {
        const finalRes = await colorModel(obj)
        try {
            const insertData = await finalRes.save()
            resObj={
                status: 1,
                message: "! data inserted !",
                data: insertData
            }
        }
        catch (error) {
            resObj={
                status: 0,
                message: "! fill all fields !",
                data: error
            }
        }
    }
    else {
        try {
            await colorModel.updateOne({ _id: new ObjectId(URLId) }, { $set: obj })
            resObj={
                status: 1,
                message: "! data updated successfully !"
            }
        }
        catch (error) {
            resObj={
                status: 0,
                message: "! data updation unsuccessfull !",
                data: error
            }
        }
    }
    response.send(resObj)
}

exports.viewColor = async (request, response) => {
    let resObj
    try {
        const allData = await colorModel.find()
        resObj={
            status: 1,
            message: "! data found !",
            data: allData
        }
    }
    catch (error) {
        resObj={
            status: 0,
            message: "! data not found !",
            data: error
        }
    }
    response.send(resObj)
}

exports.deleteColor = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        await colorModel.deleteOne({ _id: new ObjectId(deleteId) });
        resObj={
            status: 1,
            message: "! data deleted !"
        }
    }
    catch (error) {
        resObj={
            status: 0,
            message: "! data deletion unsuccessfull !",
            data: error
        }
    }
    response.send(resObj)
}

exports.editColor=async(request,response)=>{
    const URLId = request.params.id
    let resObj
    try {
        const colorData = await colorModel.findOne({ _id: new ObjectId(URLId) })
        resObj={
            status: 1,
            message: "! data found !",
            data: colorData
        }
    }
    catch (error) {
        resObj={
            status: 0,
            message: "! data not found !",
            data: error
        }
    }
    response.send(resObj)
}
// color functions end
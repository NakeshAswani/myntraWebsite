// importing the necessary packages and files
const { ObjectId } = require("mongodb")
const fs = require('fs').promises
const sliderModel = require("../../Model/sliderModel")

// slider functions start
exports.addSlider = async (request, response) => {
    const sliderNumber = request.body.sliderNumber
    const sliderName = request.body.sliderName
    const sliderDescription = request.body.sliderDescription
    let sliderImage
    const status = request.body.status
    const URLId = request.params.id ?? ""
    if (request.file === undefined) {
        if (URLId !== undefined || URLId !== "") {
            try {
                const sliderData = await sliderModel.findOne({ _id: new ObjectId(URLId) })
                sliderImage = sliderData.sliderImage
            }
            catch (error) {

            }
        }
        else {
            sliderImage = ""
        }
    }
    else {
        sliderImage = request.file.filename
    }
    const obj = {
        sliderNumber,
        sliderName,
        sliderDescription,
        sliderImage,
        status,
    }
    let resObj
    if (URLId === "") {
        const finalRes = await sliderModel(obj)
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
                error
            }
        }
    }
    else {
        try {
            await sliderModel.updateOne({ _id: new ObjectId(URLId) }, { $set: obj })
            resObj={
                status: 1,
                message: "! data updated successfully !"
            }
        }
        catch (error) {
            resObj={
                status: 0,
                message: "! data updation unsuccessfull !",
                error
            }
        }
    }
    response.send(resObj)
}

exports.viewSlider = async (request, response) => {
    let resObj
    try {
        const allData = await sliderModel.find()
        const sliderImageLink = "http://localhost:1323/Uploads/Slider/"
        resObj={
            status: 1,
            message: "! data found !",
            sliderImageLink,
            data: allData
        }
    }
    catch (error) {
        resObj={
            status: 0,
            message: "! data not found !",
            error
        }
    }
    response.send(resObj)
}

exports.deleteSlider = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        const sliderData = await sliderModel.findOneAndDelete({ _id: new ObjectId(deleteId) });
        if (sliderData.sliderImage) {
            const imagePath = `Uploads/Slider/${sliderData.sliderImage}`
            await fs.unlink(imagePath);
        }
        resObj={
            status: 1,
            message: "! data deleted !"
        }
    }
    catch (error) {
        resObj={
            status: 0,
            message: "! data deletion unsuccessfull !",
            error
        }
    }
    response.send(resObj)
}

exports.editSlider=async(request,response)=>{
    const URLId = request.params.id
    let resObj
    try {
        const sliderData = await sliderModel.findOne({ _id: new ObjectId(URLId) })
        resObj={
            status: 1,
            message: "! data found !",
            data: sliderData
        }
    }
    catch (error) {
        resObj={
            status: 0,
            message: "! data not found !",
            error
        }
    }
    response.send(resObj)
}
// slider functions end
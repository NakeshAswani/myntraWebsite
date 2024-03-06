// importing necessary files
const sliderModel = require("../../Model/sliderModel")

// slider function start
exports.viewSlider=async(request,response)=>{
    let resObj
    try{
        const sliderData=await sliderModel.find()
        const sliderImageLink = "http://localhost:1323/Uploads/Slider"
        resObj={
            status: 1,
            message: "! data found !",
            sliderImageLink,
            data: sliderData
        }
    }
    catch(error){
        resObj={
            status: 0,
            message: "! data not found !",
            data: error
        }
    }
    response.send(resObj)
}
// slider function end
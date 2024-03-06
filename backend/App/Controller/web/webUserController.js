// importing necessary files
const { ObjectId } = require("mongodb")
const userRegistrationModel = require("../../Model/userRegistrationModel")

// user functions start
exports.addUser = async (request, response) => {
    const Full_Name = request.body.Full_Name
    const Email = request.body.Email
    const Phone = request.body.Phone
    const Address = request.body.Address
    const Pincode = request.body.Pincode
    const Password = request.body.Password
    const URLId = request.params.userId ?? ""
    const obj = {
        Full_Name,
        Email,
        Phone,
        Address,
        Pincode,
        Password
    }
    let resObj
    if (URLId === "" && URLId === undefined && URLId === null) {
        try{
            const finalRes=await userRegistrationModel(obj)
            const insertData=await finalRes.save()
            resObj={
                status: 1,
                message: "! data inserted !",
                data: insertData
            }
        }
        catch(error){
            resObj={
                status: 0,
                message: "! data not inserted !",
                data: error
            }
        }
    }
    else {
        try{
            await userRegistrationModel.findOneAndUpdate({_id: new ObjectId(URLId)}, { $set: {Password: Password} })
            resObj={
                status: 1,
                message: "! password changed !",
            }
        }
        catch(error){
            resObj={
                status: 0,
                message: "! password not changed !",
                data: error
            }
        }
    }
    response.send(resObj)
}

exports.viewUser=async(request,response)=>{
    const userId=request.params.userId
    let resObj
    try{
        const userData=await userRegistrationModel.findOne({_id: new ObjectId(userId)})
        resObj={
            status: 1,
            message: "! data found !",
            data: userData
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
// user functions end
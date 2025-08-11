// importing necessary files
const { ObjectId } = require("mongodb")
const userRegistrationModel = require("../../Model/userRegistrationModel")
const nodemailer = require("nodemailer")
const jwt = require('jsonwebtoken');
const tokenKey = "myntraApp"

// Nodemailer function
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "nakesh270704@gmail.com",
        pass: process.env.SMTP_PASSWORD,
    },
});

// user functions start
exports.addUser = async (request, response) => {
    const fullName = request.body.fullName
    const Email = request.body.Email
    const Phone = request.body.Phone
    const Address = request.body.Address
    const Password = request.body.Password
    const URLId = request.params.id ?? ""
    const obj = {
        fullName,
        Email,
        Phone,
        Address,
        Password
    }
    let resObj
    if (URLId === "") {
        try {
            const finalRes = await userRegistrationModel(obj)
            const insertData = await finalRes.save()
            const token = jwt.sign({ id: insertData._id }, tokenKey)
            resObj = {
                status: 1,
                message: "! data inserted !",
                data: { insertData, token }
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! data not inserted !",
                error
            }
        }
    }
    else {
        try {
            await userRegistrationModel.findOneAndUpdate({ _id: new ObjectId(URLId) }, { $set: obj })
            resObj = {
                status: 1,
                message: "! user updated !",
            }
        }
        catch (error) {
            resObj = {
                status: 0,
                message: "! user not updated !",
                error
            }
        }
    }
    response.send(resObj)
}

exports.addAddress = async (request, response) => {
    const userId = request.params.userId
    const Address = request.body.Address
    let resObj
    try {
        const user = await userRegistrationModel.findById(userId)
        if (user) {
            user.Address.push(Address)
            await user.save()
            resObj = {
                status: 1,
                message: "! Address added successfully !",
                data: user.Address[user.Address.length - 1]
            }
        }
        else {
            resObj = {
                status: 0,
                message: "! User not found !"
            }
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! Error adding address !",
            error
        }
    }
    response.send(resObj)
}

exports.editAddress = async (request, response) => {
    const userId = request.params.userId;
    const addressId = request.query.addressId;
    const updatedAddress = request.body.Address;
    let resObj;
    try {
        const user = await userRegistrationModel.findById(userId);
        if (user) {
            const existingAddressIndex = user.Address.findIndex(
                (address) => address._id.toString() === addressId
            );
            if (existingAddressIndex > -1) {
                user.Address[existingAddressIndex] = updatedAddress;
                await user.save();
                resObj = {
                    status: 1,
                    message: "! Address edited successfully !",
                };
            }
            else {
                resObj = {
                    status: 0,
                    message: "! Address not found for editing !",
                };
            }
        }
        else {
            resObj = {
                status: 0,
                message: "! User not found !",
            };
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! Error editing address !",
            error,
        };
    }
    response.send(resObj);
}

exports.deleteAddress = async (request, response) => {
    const userId = request.params.userId;
    const addressId = request.query.addressId;

    let resObj;
    try {
        const user = await userRegistrationModel.findById(userId);
        if (user) {
            const filteredAddresses = user.Address.filter((address) => address._id.toString() !== addressId);
            user.Address = filteredAddresses;
            await user.save();
            resObj = {
                status: 1,
                message: "! Address deleted successfully !",
            };
        }
        else {
            resObj = {
                status: 0,
                message: "! User not found !",
            };
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! Error deleting address !",
            error,
        };
    }
    response.send(resObj);
}

exports.viewUser = async (request, response) => {
    const userId = request.params.userId
    let resObj
    try {
        jwt.verify(request.query.token, tokenKey)
        const userData = await userRegistrationModel.findOne({ _id: new ObjectId(userId) })
        resObj = {
            status: 1,
            message: "! data found !",
            data: userData
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

exports.checkUser = async (request, response) => {
    const obj = {
        Phone: request.body.Phone,
        Password: request.body.Password
    }
    let resObj
    try {
        const userData = await userRegistrationModel.findOne(obj)
        if (userData) {
            // await transporter.sendMail({
            //     from: 'information regarding login <nakesh270704@gmail.com>',
            //     to: userData.Email,
            //     subject: "login alert",
            //     text: `Hello,\n\nThis is to inform you that your account has been accessed from the following device:\n\nDevice Info: ${deviceInfo}\n\nIf this was not you, please take appropriate action or mail us and our technical team will reach you.`,
            // });
            const token = jwt.sign({ id: userData._id }, tokenKey)
            resObj = {
                status: 1,
                message: "! login successfull !",
                data: { userData, token }
            }
        }
        else {
            resObj = {
                status: 0,
                message: "! phone or password not matched !"
            }
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! user not found !",
            error
        }
    }
    response.send(resObj)
}

exports.deleteUser = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        await userRegistrationModel.findOneAndDelete({ _id: new ObjectId(deleteId) })
        resObj = {
            status: 1,
            message: "! user deleted !"
        }
    }
    catch (error) {
        resObj = {
            status: 0,
            message: "! user deletetion unsuccessfull !"
        }
    }
    response.send(resObj)
}
// user functions end
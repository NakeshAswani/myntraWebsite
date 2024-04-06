// importing the necessary packages and files
const nodemailer = require("nodemailer")
const orderModel = require("../../Model/orderModel");
const userRegistrationModel = require("../../Model/userRegistrationModel");

// Nodemailer function
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "nakesh270704@gmail.com",
        pass: "cjglikzeyooccgtz",
    },
});

// order function start
exports.viewOrder = async (request, response) => {
    let resObj
    const orderImageLink = "http://localhost:1323/Uploads/Products/"
    try {
        const allData = await orderModel.find()
        resObj = {
            status: 1,
            message: "! data found !",
            orderImageLink,
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

exports.deleteOrder = async (request, response) => {
    const deleteId = request.params.id
    let resObj
    try {
        const orderData = await orderModel.findOneAndDelete({ _id: new ObjectId(deleteId) });
        const userData = await userRegistrationModel.findOne({ _id: new ObjectId(orderData.userId) });
        const info = await transporter.sendMail({
            from: 'information regarding out of stock <nakesh270704@gmail.com>', // sender address
            to: `${userData.Email}`, // list of receivers
            subject: "order item out of stock", // Subject line
            text: `Hello User,\n\nThis is to inform you that your order of ${orderData.productName} is currently out of stock.`, // plain text body
        });
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
// order function end
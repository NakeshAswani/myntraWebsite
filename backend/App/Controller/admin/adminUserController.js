// importing the necessary packages and files
const nodemailer = require("nodemailer")
const userRegistrationModel = require("../../Model/userRegistrationModel")

// Nodemailer function
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "nakesh270704@gmail.com",
        pass: "cjglikzeyooccgtz",
    },
});

// user function start
exports.viewUser = async (request, response) => {
    let resObj
    try {
        const allData = await userRegistrationModel.find()
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
            data: error
        }
    }
    response.send(resObj)
}

exports.checkLogin = async (request, response) => {
    let resObj
    let originalUserName = "admin"
    let originalPassword = "abc@123"
    let userName = request.body.userName
    let password = request.body.password
    const userAgent = request.useragent
    const deviceInfo = {
        browser: userAgent.browser,
        version: userAgent.version,
        os: userAgent.os,
        platform: userAgent.platform,
        source: userAgent.source,
    }
    if (userName == originalUserName && password == originalPassword) {
        const info = await transporter.sendMail({
            from: 'information regarding login <nakesh270704@gmail.com>', // sender address
            to: "nakeshaswani27@gmail.com", // list of receivers
            subject: "login alert", // Subject line
            text: `Hello,\n\nThis is to inform you that your account has been accessed from the following device:\n\nDevice Info: ${deviceInfo}\n\nIf this was not you, please take appropriate action.`, // plain text body
        });
        resObj = {
            status: 1,
            message: "! login successful !"
        }
    }
    else {
        resObj = {
            status: 0,
            message: "! UserName or Password not matched !"
        }
    }
    response.send(resObj)
}
// user function end
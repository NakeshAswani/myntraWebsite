// importing the necessary packages and files
const nodemailer = require("nodemailer")
const userRegistrationModel = require("../../Model/userRegistrationModel")

// Nodemailer function
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
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
            error
        }
    }
    response.send(resObj)
}

exports.checkLogin = (request, response) => {
    let resObj
    let originalUserName = "admin"
    let originalPassword = "admin@123"
    let userName = request.body.userName
    let password = request.body.password
    const userAgent = request.useragent
    const deviceInfo = {
        browser: userAgent?.browser || "Unknown",
        version: userAgent?.version || "Unknown",
        os: userAgent?.os || "Unknown",
        platform: userAgent?.platform || "Unknown",
        source: userAgent?.source || "Unknown",
    }
    if (userName === originalUserName && password === originalPassword) {
        resObj = {
            status: 1,
            message: "! login successful !"
        }
        transporter.sendMail({
            from: 'information regarding login <nakesh270704@gmail.com>',
            to: "nakeshaswani27@gmail.com",
            subject: "login alert",
            html: `Hello,\n\nThis is to inform you that your account has been accessed from the following device:\n\nDevice Info: <table border="1px">${Object.entries(deviceInfo).map(([keys, value]) => {
                return(
                    `<tr><th>${keys}</th><td>${value}</td></tr>`
                )
            })}</table>\n\nIf this was not you, please take appropriate action.`,
        });
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
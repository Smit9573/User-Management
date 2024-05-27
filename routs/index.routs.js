const express = require("express")
const routs = express.Router()

const otp =  require("./otp.user")
const user = require("./user.routs")



routs.use('/otp',otp)
routs.use('/user',user)





module.exports = routs
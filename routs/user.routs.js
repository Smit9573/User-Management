const express = require("express")
const routs = express.Router()

const auth = require("../middleware/auth")
const {upload}=require("../untils/index")

const {alreadyuser,changePassword,forgetPassword,getAllUsers,loginUser,profileUpdate,singupUser, getUser} = require("../controllers/user.controller")
const {alreadyuserValidaton,singupValidation,loginvelidation,changePassValidation,forgetPasswordValidation,profileUpdateValidation} = require("../validation/userSchema.velidation")


//all user -admin
routs.get('/getAllUsers',auth(["admin"]),getAllUsers)
routs.get('/get-user',auth(["admin","vendor","user"]),getUser)

//post
routs.post('/already-user',alreadyuserValidaton,alreadyuser)
routs.post('/singup',singupValidation,singupUser)
routs.post('/login',loginvelidation,loginUser)
routs.put('/change-password',changePassValidation,auth(["user","admin","vendor"]),changePassword)
routs.put('/forget-password',forgetPasswordValidation,forgetPassword)

//update profile
routs.put('/profile-update',upload.single('profile'),auth(["user","admin","vendor"]),profileUpdateValidation,profileUpdate)

module.exports = routs
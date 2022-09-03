const express=require("express")

const router=express.Router()
const { isAuthenticatedUser } = require("../middleware/auth")

const {userLogin,userLogout, getUserDetail, addTask, myTasks}=require("../controllers/userController")


router.post("/login",userLogin)
router.get("/logout",isAuthenticatedUser,userLogout)
router.get("/loadme",isAuthenticatedUser, getUserDetail)
router.post("/user/addtask",isAuthenticatedUser, addTask)
router.get("/user/mytasks",isAuthenticatedUser, myTasks)

module.exports=router
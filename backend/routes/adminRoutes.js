const express=require("express");
const { addUserByAdmin, getAllUsers, getAllTasks } = require("../controllers/adminController");
const {  isAuthenticatedUser, isAdmin} = require("../middleware/auth");
const router=express.Router()


// user api

router.post('/admin/adduser',isAuthenticatedUser, isAdmin, addUserByAdmin);
router.get('/admin/allusers',isAuthenticatedUser, isAdmin, getAllUsers);
router.get('/admin/alltasks',isAuthenticatedUser, isAdmin, getAllTasks);



module.exports=router
const User = require('../models/UserModel');
const sendToken = require('../utils/jwtToken');
const asyncHandler = require('express-async-handler');
const Task=require("../models/TaskModel")


// USER

exports.addUserByAdmin = asyncHandler(async (req, res) => {
	console.log(req.body);

	const user = await User.create(req.body);

	res.status(201).json({
		success: true,
		user
	});
});

exports.getAllUsers = asyncHandler(async (req, res) => {
	const allusers = await User.find({role:"User"}).select("+password");

	res.status(200).json({
		success: true,
		allusers
	});
});


exports.getAllTasks=asyncHandler(async(req,res)=>{

	const alltasks=await Task.find()
	res.status(200).json({
		success: true,
		alltasks
	});

})
const User = require('../models/UserModel');
const Task = require('../models/TaskModel');
const sendToken = require('../utils/jwtToken');
const asyncHandler = require('express-async-handler');

exports.userLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(404);
		throw new Error('enter valid email and password');
	}
	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		res.status(401);
		throw new Error('user doesnt exists');
	}

	const isPasswordMatched = await user.comparePassword(password);

	if (!isPasswordMatched) {
		res.status(401);
		throw new Error('invalid password');
	}
	sendToken(user, 200, res);
});

exports.userLogout = asyncHandler(async (req, res) => {
	res
		.status(200)
		.cookie('token', null, {
			expires: new Date(Date.now()),
			httpOnly: true
		})
		.json({ success: true, message: 'loggedOut successfully' });
});

exports.getUserDetail = asyncHandler(async (req, res) => {
	console.log(req.user.id);
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(404);
		throw new Error('please Login');
	}

	res.status(200).json({ success: true, user });
});

exports.addTask = asyncHandler(async (req, res) => {
	
	const { date, task, esttime } = req.body;

	const userTask = await Task.findOne({ user: req.user.id });

	if (userTask) {
		userTask.tasks.unshift({ date, task, esttime });
		await userTask.save({ validateBeforeSave: false });
	} else {
		const newtask = {
			user: req.user._id,
			tasks: {
				date,
				task,
				esttime
			}
		};

		await Task.create(newtask);
	}

	res.status(200).json({ success: true });
});

exports.myTasks=asyncHandler(async(req,res)=>{

	const mytasks=await Task.findOne({user:req.user._id})

	if (!mytasks) {
		res.status(404);
		throw new Error('no tasks found');
	}


	res.status(200).json({ success: true, mytasks});


})
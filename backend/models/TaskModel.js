const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
	},
	tasks: [
		{
			date: {
				type: Date,
				required: true
			},
			task: {
				type: String,
				required: true
			},
			esttime: {
				hours: {
					type: Number,
					required: true
				},
				minutes: {
					type: Number,
					required: true
				}
			},
            createdAt:{
                type:Date,
                default:Date.now
            }
		}
	]
});

module.exports=mongoose.model('Task',taskSchema)
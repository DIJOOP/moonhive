import  {React,useEffect,useState} from 'react';
import Modal from '@mui/material/Modal';
import './Addtask.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addNewTask ,clearErrors, getMyTasks} from '../../Redux/Action/userAction';
import {NEWTASK_RESET} from "../../Redux/constants/userContants"
import { toast } from 'react-toastify';


const Addtask = () => {
	const { isAdded, loading, error } = useSelector((state) => state.newTask);
	const [ open, setOpen ] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { register, handleSubmit, errors } = useForm();
	const dispatch = useDispatch();
	const onSubmit = (data) => {
		const task = {
			date: data.date,
			task: data.task,
			esttime: {
				hours: data.hour,
				minutes: data.minute
			}
		};

		dispatch(addNewTask(task))
	};

	useEffect(
		() => {
			if (isAdded) {
				toast.success('Task Added');
				dispatch({
					type: NEWTASK_RESET
				});
				dispatch(getMyTasks())
				
			}
			if (error) toast.error(error);
			dispatch(clearErrors());
		},
		[ isAdded, error ]
	);
	return (
		<div>
			<button onClick={handleOpen} className="common_btn">
				Add New Task
			</button>
			{/* <Button >Open modal</Button> */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div className="form_container">
					<div className="form_box">
						<form onSubmit={handleSubmit(onSubmit)}>
							<h5>Add New Task</h5>

							<label>
								<span>Task:</span>
								<input
									type="text"
									placeholder="Task"
									{...register('task', { required: true, maxLength: 10 })}
								/>
							</label>

							<label>
								<span>Est.Time:</span>
								<div className="time_box">
									<input
										type="number"
										placeholder="hours"
										{...register('hour', { required: true, maxLength: 30 })}
									/>

									<input
										type="number"
										placeholder="minutes"
										{...register('minute', { required: true, maxLength: 30 })}
									/>
								</div>
							</label>
							<label>
								<span>Date:</span>
								<input
									type="date"
									placeholder="date"
									{...register('date', { required: true, maxLength: 10 })}
								/>
							</label>

							<div>
								<button className="common_btn" type="submit">
									Add Task
								</button>
							</div>
						</form>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Addtask;

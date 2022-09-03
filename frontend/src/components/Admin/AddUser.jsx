import React from 'react';
import './AddUser.css';
import { useForm } from 'react-hook-form';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, addVendor,clearErrors}from "../../Redux/Action/adminAction"
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { NEWUSER_RESET } from '../../Redux/constants/adminConstants';

const Adduser = () => {
	const { register, handleSubmit, errors } = useForm();
	const { user, isAdded, error, loading } = useSelector((state) => state.newUser);

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(addUser(data));
	};

	useEffect(
		() => {
			if (isAdded) {
				toast.success('vendor added');
				dispatch({
					type: NEWUSER_RESET
				});
			}

			if (error) {
				toast.error(error);
				dispatch(clearErrors());
			}
		},
		[ isAdded, error ]
	);

	return (
		<Fragment>
			<h4 style={{ textAlign: 'center' }}>Add New User</h4>

			<div className="form_wrap">
				<div className="form_box">
					<form onSubmit={handleSubmit(onSubmit)}>
						<label>
							<span>Name :</span>
							<input
								type="text"
								placeholder="Task"
								{...register('name', { required: true, maxLength: 10 })}
							/>
						</label>

						<label>
							<span>Email Id :</span>
							<input
								type="email"
								placeholder="Email Id"
								{...register('email', { required: true, maxLength: 30 })}
							/>
						</label>
						<label>
							<span>Phone :</span>
							<input type="text" placeholder="Phone" {...register('phone', { required: true })} />
						</label>

						<label>
							<span>Password :</span>
							<input
								type="password"
								placeholder="Password"
								{...register('password', { required: true })}
							/>
						</label>

						<div>
							<button className="common_btn" type="submit">
								Add User
							</button>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default Adduser;

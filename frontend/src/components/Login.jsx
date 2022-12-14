import React, { useEffect, useState } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, userLogin } from '../Redux/Action/userAction';
import { useNavigate } from 'react-router-dom';
import{toast} from "react-toastify"

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { isAuthenticated, user, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		dispatch(userLogin(data));
	};

	useEffect(
		() => {
			if (isAuthenticated) {
				if (user.role === 'Admin') navigate('/admin');

				if (user.role === 'User') navigate('/user/home');
			}
			if(error){
				toast.error(error)
				dispatch(clearErrors())
			}
		},
		[ isAuthenticated,error ]
	);

	return (
	
		
				<div className="login_box">
					<div className="logo_box">
						<div>
						
							<h2>Login</h2>
						</div>
					</div>
				
					<div className="loginform_box">
						<form style={{gap:(errors.email &&errors.password)?"25px":"30px"}} onSubmit={handleSubmit(onSubmit)}>
							<input
								type="email"
								placeholder="Email"
								{...register('email', { required: true, maxLength: 20 })}
							/>
							{errors.email && <span style={{ color: 'red',fontSize:"x-small" }}>This field is required</span>}
							<input
								type="password"
								placeholder="Password"
								{...register('password', { required: true })}
							/>
							{errors.password && <span style={{ color: 'red' ,fontSize:"x-small"}}>This field is required</span>}

							

							<div>
								
								<button type="submit">Login</button>
							</div>
						</form>
					</div>
				</div>
			
		
	);
};

export default Login;

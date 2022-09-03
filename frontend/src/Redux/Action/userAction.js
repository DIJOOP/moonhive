
import Axios from "../axios";
import { LOADUSER_FAIL, LOADUSER_REQUEST, LOADUSER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, MYTASKS_FAIL, MYTASKS_REQUEST, MYTASKS_SUCCESS, NEWTASK_FAIL, NEWTASK_REQUEST, NEWTASK_SUCCESS } from "../constants/userContants";
Axios.defaults.withCredentials=true

export const userLogin = ({email,password}) => async (dispatch) => {

	try {
		dispatch({
			type: LOGIN_REQUEST
		});

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.post(`/api/v1/login`, {email,password}, config);

		console.log(data)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: data.user
		});
	} catch (error) {
		console.log(error.response.data.message)
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.message
		});
	}
};


export const userLogout = () => async (dispatch) => {
	try {
		await Axios.get(`/api/v1/logout`);
		dispatch({
			type: LOGOUT_SUCCESS
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL,
			payload: error.response.data.message
		});
	}
};

export const LoadUser = () => async (dispatch) => {
	try {
		dispatch({
			type: LOADUSER_REQUEST
		});

		const { data } = await Axios.get(`/api/v1/loadme`);

		dispatch({
			type: LOADUSER_SUCCESS,
			payload: data.user
		});
	} catch (error) {
		console.log(error.response.data.message);
		dispatch({
			type: LOADUSER_FAIL,
			payload: error.response.data.message
		});
	}
};


export const addNewTask = (taskData) => async (dispatch) => {
	try {
		dispatch({
			type: NEWTASK_REQUEST
		});

        const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.post('/api/v1/user/addtask',taskData,config);

		dispatch({
			type: NEWTASK_SUCCESS,
			payload: data.success
		});
	} catch (error) {
		dispatch({
			type: NEWTASK_FAIL,
			payload: error.response.data.message
		});
	}
};

export const getMyTasks = () => async (dispatch) => {
	try {
		dispatch({
			type: MYTASKS_REQUEST
		});

        const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.get('/api/v1/user/mytasks',config);

		dispatch({
			type: MYTASKS_SUCCESS,
			payload: data.mytasks
		});
	} catch (error) {
		dispatch({
			type: MYTASKS_FAIL,
			payload: error.response.data.message
		});
	}
};




export const clearErrors = () => async (dispatch) => {
    dispatch({ type: 'clearErrors' });
  };

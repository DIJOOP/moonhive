import Axios from '../axios';
import {
	ALLTASKS_FAIL,
	ALLTASKS_REQUEST,
	ALLTASKS_SUCCESS,
	ALLUSERS_FAIL,
	ALLUSERS_REQUEST,
	ALLUSERS_SUCCESS,
	NEWUSER_FAIL,
	NEWUSER_REQUEST,
	NEWUSER_SUCCESS
} from '../constants/adminConstants';


export const addUser = (vendordata) => async (dispatch) => {
	try {
		dispatch({
			type: NEWUSER_REQUEST
		});

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.post('/api/v1/admin/adduser', vendordata, config);
		console.log(data);
		dispatch({
			type: NEWUSER_SUCCESS,
			payload: data.user
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: NEWUSER_FAIL,
			payload: error.response.data.message
		});
	}
};

export const getAllUsers = () => async (dispatch) => {
	try {
		dispatch({
			type: ALLUSERS_REQUEST
		});

		// const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.get('/api/v1/admin/allusers');

		console.log(data);

		dispatch({
			type: ALLUSERS_SUCCESS,
			payload: data.allusers
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: ALLUSERS_FAIL,
			payload: error.response.data.message
		});
	}
};

export const getAllTasks = () => async (dispatch) => {
	try {
		dispatch({
			type: ALLTASKS_REQUEST
		});

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.get('/api/v1/admin/alltasks', config);

		dispatch({
			type: ALLTASKS_SUCCESS,
			payload: data.alltasks
		});
	} catch (error) {
		dispatch({
			type: ALLTASKS_FAIL,
			payload: error.response.data.message
		});
	}
};

export const clearErrors = () => async (dispatch) => {
	dispatch({ type: 'clearErrors' });
};

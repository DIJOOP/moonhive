import {createReducer} from "@reduxjs/toolkit"

const initialState={}


export const userReducer=createReducer(initialState,{

    LOGIN_REQUEST: (state) => {
		state.loading = true;
		state.isAuthenticated = false;
	},
	LOGIN_SUCCESS: (state, action) => {
		state.loading = false;
		state.user = action.payload;
		state.isAuthenticated = true;
	},
	LOGIN_FAIL: (state, action) => {
		state.loading = false;
		state.user = null;
		state.isAuthenticated = false;
		state.error = action.payload;
	},
	LOADUSER_REQUEST: (state) => {
		state.loading = true;
		state.isAuthenticated = false;
	},

	LOADUSER_SUCCESS: (state, action) => {
		state.loading = false;
		state.user = action.payload;
		state.isAuthenticated = true;
	},

	LOADUSER_FAIL: (state, action) => {
		state.loading = false;
		state.user = null;
		state.isAuthenticated = false;
		state.loaderror = action.payload;
	},

	LOGOUT_SUCCESS: (state) => {
		state.isAuthenticated = false;
		state.user = null;
	},
	LOGOUT_FAIL: (state, action) => {
		state.error = action.payload;
	},


	clearErrors: (state) => {
		state.error = null;
	}


})


export const newTaskReducer = createReducer(initialState, {
		NEWTASK_REQUEST: (state) => {
		state.loading = true;
	},
		NEWTASK_SUCCESS: (state, action) => {
		state.loading = false;
		state.newTask = action.payload;
		state.isAdded=true
	},
		NEWTASK_FAIL: (state, action) => {
		state.loading = false;
		state.error = action.payload;
		state.isAdded=false
	},
		NEWTASK_RESET: (state, action) => {
		state.isAdded=false
	},


	clearErrors: (state) => {
		state.error = null;
		
	}
});

export const myTasksReducer = createReducer(initialState, {
	MYTASKS_REQUEST: (state) => {
		state.loading = true;
	},
	MYTASKS_SUCCESS: (state, action) => {
		state.loading = false;
		state.allTasks = action.payload;
	},
	MYTASKS: (state, action) => {
		state.loading = false;
		state.error = action.payload;
	},
	clearErrors: (state) => {
		state.error = null;
	}
});




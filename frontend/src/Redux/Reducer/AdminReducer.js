import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

export const newUserReducer = createReducer(initialState, {
	 NEWUSER_REQUEST: (state) => {
		state.loading = true;
	},
	 NEWUSER_SUCCESS: (state, action) => {
		state.loading = false;
		state.user = action.payload;
		state.isAdded = true;
	},

	 NEWUSER_FAIL: (state, action) => {
		state.loading = false;
		state.user = null;
		state.isAdded = false
		state.error = action.payload;
	},

	 NEWUSER_RESET: (state, action) => {
		state.isAdded = null;
		state.user = null;
	},

	clearErrors: (state) => {
		state.error = null;
	}
});


export const allUsersReducer = createReducer(initialState, {
	ALLUSERS_REQUEST: (state) => {
	   state.loading = true;
   },
	ALLUSERS_SUCCESS: (state,action) => {
	   state.loading = false;
	   state.users = action.payload;
	   
   },

	ALLUSERS_FAIL: (state, action) => {
	   state.loading = false;
	   state.users = null;
	   state.error = action.payload;
   },


   clearErrors: (state) => {
	   state.error = null;
   }
});


export const allTasksReducer = createReducer(initialState, {
	ALLTASKS_REQUEST: (state) => {
		state.loading = true;
	},
	ALLTASKS_SUCCESS: (state, action) => {
		state.loading = false;
		state.alltasks = action.payload;
	},
	ALLTASKS: (state, action) => {
		state.loading = false;
		state.error = action.payload;
	},
	clearErrors: (state) => {
		state.error = null;
	}
});

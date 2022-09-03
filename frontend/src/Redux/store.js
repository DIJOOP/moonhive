import { configureStore } from '@reduxjs/toolkit';
import { allTasksReducer, allUsersReducer, newUserReducer } from './Reducer/AdminReducer';
import { myTasksReducer, newTaskReducer, userReducer } from './Reducer/UserReducer';

const store = configureStore({
	reducer: {
		user: userReducer,
		newTask: newTaskReducer,
		myTasks: myTasksReducer,
		newUser: newUserReducer,
		allUsers: allUsersReducer,
		allUserTasks: allTasksReducer
	}
});

export default store;

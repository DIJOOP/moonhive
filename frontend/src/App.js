import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './components/Admin/AddUser';
import AdminHome from './components/Admin/AdminHome';
import AllUsers from './components/Admin/AllUsers';
import Dashboard from './components/Admin/Dashboard';
import Header from './components/Header';
import Login from './components/Login';
import Userhome from './components/User/Userhome';
import Toaster from './components/Toaster';
import 'react-toastify/dist/ReactToastify.css';
import { LoadUser } from './Redux/Action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RequireAuth from './components/RequireAuth';

function App() {
	const { user } = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const ROLES = {
		User: 'User',
		Admin: 'Admin'
	};

	useEffect(() => {
		if (!user) {
			dispatch(LoadUser());
		}
	}, []);

	return (
		<Router>
			<Toaster />
			<Header />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route element={<RequireAuth allowedRoles={[ ROLES.Admin ]} />}>
					<Route path="/admin" element={<AdminHome />}>
						<Route index element={<Dashboard />} />
						<Route path="allusers" element={<AllUsers />} />
						<Route path="adduser" element={<AddUser />} />
					</Route>
				</Route>
				<Route element={<RequireAuth allowedRoles={[ ROLES.User ]} />}>
					<Route path="/user/home" element={<Userhome />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

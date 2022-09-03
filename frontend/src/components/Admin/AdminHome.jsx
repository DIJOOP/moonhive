import React from 'react';
import './AdminHome.css';
import { NavLink, Outlet } from 'react-router-dom';
// import Header from './Header';
// import logo from '../../images/logo.png';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import PersonSearchIcon from '@mui/icons-material/PersonSearch';
// import AddCardIcon from '@mui/icons-material/AddCard';
// import PreviewIcon from '@mui/icons-material/Preview';

const AdminHome = () => {
	return (
		<div className="main_container">
			<div className="sidebar_Container">
				{/* <div className="icon_container">
					<img src={logo} alt="image" />
				</div> */}

				<div className="options">
					<NavLink className="inactive" to="/admin">
						 Dashboard
					</NavLink>

					<NavLink className="inactive" to="/admin/allusers">
						All Users
					</NavLink>
					<NavLink className="inactive" to="/admin/adduser">
						Add User
					</NavLink>
					
				</div>
			</div>
			<div className="content_container">
				<div className="content_box">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;

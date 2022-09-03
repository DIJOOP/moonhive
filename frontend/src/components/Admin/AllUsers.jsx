import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from '../../Redux/Action/adminAction';

const AllUsers = () => {
	const { users, loading, error } = useSelector((state) => state.allUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

    return (
		<div>
			<h4 style={{"textAlign":"center"}}>All Users</h4>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{users&&users.map((user)=>(
						
						<tr key={user._id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
					</tr>
					))}
					
				</tbody>
			</table>
		</div>
	);
  
}

export default AllUsers

import React from 'react';

const UserTable = ({task}) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
					<th>No.</th>
						<th>Date</th>
						<th>Task</th>
						<th>Estimated Time</th>
					</tr>
				</thead>
				<tbody>
					{task&&task.map((data,index)=>(<tr key={data._id}>
						<td>{index+1}</td>
						<td>{data.date.substring(0, 10)}</td>
						<td>{data.task}</td>
						<td>{data.esttime.hours} hr {data.esttime.minutes} min</td>
					</tr>))}
					
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;

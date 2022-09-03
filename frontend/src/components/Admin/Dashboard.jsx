import React from 'react';
import { Chart } from 'react-google-charts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllTasks, getAllUsers } from '../../Redux/Action/adminAction';
import { useState } from 'react';

const Dashboard = () => {
	const { alltasks, loading, error } = useSelector((state) => state.allUserTasks);

	const dispatch = useDispatch();
	const [ tasks, setTasks ] = useState([]);
	const [ date, setDate ] = useState('');
	const [ data, setData ] = useState([]);

	useEffect(
		() => {
			if (!alltasks) {
				dispatch(getAllTasks());
			} else {
				const data = alltasks && alltasks;
				setTasks(data);
				console.log(tasks);
			}
		},
		[ alltasks ]
	);


	const handleChange = () => {
		setData((data) => [ [ 'Task', 'Estimated Time(hours)', { role: 'style' } ] ]);
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		let array = alltasks.reduce((acc, ele) => {
			acc = acc.concat(ele.tasks);
			return acc;
		}, []);

		let filtered = array.filter((data) => {
			return data.date.substring(0, 10) === date;
		});

		filtered.forEach((element) => {
			let time = (element.esttime.hours * 60 + element.esttime.minutes) / 60;
			console.log(time);
			const ar = [ element.task, time, '#b87333' ];
			setData((data) => [ ...data, ar ]);
		});
	};

	return (
		<div>
			<input
				type="date"
				onChange={(e) => {
					setDate((date) => e.target.value);
				}}
			/>
			<input type="submit" value="Find" onClick={handleChange} />
			<div className="dashboardContainer">
				<Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
			</div>
		</div>
	);
};

export default Dashboard;

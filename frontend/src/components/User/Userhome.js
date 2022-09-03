import DatePicker from './DatePicker';
import UserTable from './UserTable';
import './userhome.css';
import Addtask from './Addtask';
import {useSelector,useDispatch} from "react-redux"
import { useEffect, useState } from 'react';
import { getMyTasks } from '../../Redux/Action/userAction';



const Userhome = () => {

	const{allTasks,loading,error}=useSelector(state=>state.myTasks)

	const dispatch=useDispatch()
	const [tasks,setTasks]=useState([])

	const filterData=(data)=>{
		setTasks(tasks=>data)
	}

	useEffect(()=>{
		if(!allTasks){
			dispatch(getMyTasks())
		}
		allTasks&&setTasks(tasks=>allTasks.tasks)

		console.log(allTasks)

	},[allTasks])

	


	return (
		<div className="user_maincontainer">
			<h2 style={{ textAlign: 'center' }}>Your Tasks</h2>
			<div className="title_box">
				<div className="date_box">
					<span>filter by date : &nbsp;</span>
					<DatePicker tasks={allTasks}  setdata={filterData} />
					{/* <CalendarsDateRangePicker  tasks={allTasks}/> */}
				</div>
				<Addtask />
			</div>
			<div className="userTable">
				<UserTable task={tasks} />
			</div>
		</div>
	);
};

export default Userhome;

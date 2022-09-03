import React, { useState } from 'react';

import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';

const DatePicker = ({ tasks, setdata }) => {
	const [ fromDate, setFromDate ] = useState(new Date());
	const [ toDate, setToDate ] = useState(new Date());

	const handleEvent = (event, picker) => {
		setFromDate(picker.startDate._d.toISOString());
		setToDate(picker.endDate._d.toISOString());
	};

	const handleFind = () => {
		const data = tasks.tasks.filter((ele) => {
			return fromDate < ele.date && toDate > ele.date;
		});

		data.sort(function(a, b) {
			var dateA = new Date(a.date),
				dateB = new Date(b.date);
			return dateB - dateA;
		});

		setdata(data);
	};

	return (
		<div>
			<DateRangePicker
				startDate={new Date()}
				endDate={new Date()}
				alwaysShowCalendars={true}
				onEvent={handleEvent}
			>
				<button>
					{moment(fromDate).format('LL')} to {moment(toDate).format('LL')}
				</button>
			</DateRangePicker>
			<button style={{ marginInline: '10px', paddingInline: '10px' }} onClick={handleFind}>
				search
			</button>
		</div>
	);
};

export default DatePicker;

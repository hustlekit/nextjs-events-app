import { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';

import Button from '../ui/Button';

const EventsSearch = (props) => {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	
	const yearInputRef = useRef();
	const monthInputRef = useRef();
	
	const submitHandler = (event) => {
		event.preventDefault();
		
		const selectedYear = yearInputRef.current.value;
		const selectedMonth = monthInputRef.current.value;
		
		props.onSearch(selectedYear, selectedMonth);
	};
	
	return (
		<form className={ `${ classes.form } ${ isTabletSize ? 'tabletSize' : '' }` } onSubmit={ submitHandler }>
			<div className={ `${ classes.controls } ${ isTabletSize ? 'tabletSize' : '' }` }>
				<div className={ `${ classes.control } ${ isTabletSize ? 'tabletSize' : '' }` }>
					<label htmlFor={ 'yearSelect' }>Year</label>
					<select id={ 'yearSelect' } ref={ yearInputRef }>
						<option value={ '2021' }>2021</option>
						<option value={ '2022' }>2022</option>
					</select>
				</div>
				<div className={ `${ classes.control } ${ isTabletSize ? 'tabletSize' : '' }` }>
					<label htmlFor={ 'monthSelect' }>Year</label>
					<select id={ 'monthSelect' } ref={ monthInputRef }>
						<option value={ '1' }>January</option>
						<option value={ '2' }>February</option>
						<option value={ '3' }>March</option>
						<option value={ '4' }>April</option>
						<option value={ '5' }>May</option>
						<option value={ '6' }>June</option>
						<option value={ '7' }>July</option>
						<option value={ '8' }>August</option>
						<option value={ '9' }>September</option>
						<option value={ '10' }>October</option>
						<option value={ '11' }>November</option>
						<option value={ '12' }>December</option>
					</select>
				</div>
			</div>
			<Button>Find Events</Button>
		</form>
	);
};

const styles = makeStyles({
	form: {
		margin: '2rem auto',
		boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
		padding: '1rem',
		backgroundColor: 'white',
		borderRadius: '6px',
		width: '90%',
		maxWidth: '40rem',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		gap: '1rem',
		'&.tabletSize': {
			flexDirection: 'row'
		}
	},
	controls: {
		width: '100%',
		display: 'flex',
		gap: '1rem',
		flexDirection: 'column',
		'&.tabletSize': {
			width: '80%',
			flexDirection: 'row'
		}
	},
	control: {
		flex: 1,
		display: 'flex',
		gap: '1rem',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& label': {
			fontWeight: 'bold'
		},
		'& select': {
			font: 'inherit',
			backgroundColor: 'white',
			borderRadius: '6px',
			width: '70%',
			padding: '0.25rem'
		},
		'&.tabletSize select': {
			width: '100%'
		},
		'& button': {
			width: '100%',
			font: 'inherit',
			padding: '0.25rem 0.5rem',
			backgroundColor: '#03be9f',
			border: '1px solid #03be9f',
			color: '#dafff7',
			borderRadius: '4px'
		},
		'&.tabletSize button': {
			width: '20%'
		}
	}
});

export default EventsSearch;
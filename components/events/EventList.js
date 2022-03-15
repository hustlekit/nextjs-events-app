import React from 'react';

import { makeStyles } from '@mui/styles';

import EventItem from './EventItem';

const EventList = props => {
	const classes = styles();
	const { items } = props;
	
	return (
		<ul className={ classes.list }>
			{ items?.map(event => <EventItem key={ event.id } event={ event }/>) }
		</ul>
	)
}

const styles = makeStyles({
	list: {
		width: '90%',
		maxWidth: '40rem',
		margin: '5rem auto'
	}
});

export default EventList;
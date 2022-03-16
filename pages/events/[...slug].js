import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';

import { getFilteredEvents } from '../../data/dummy-data';
import ResultsTitle from '../../components/events/ResultsTitle';
import EventList from '../../components/events/EventList';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';

const FilteredEventsPage = () => {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	const router = useRouter();
	
	const filterData = router.query.slug;
	
	if ( !filterData ) {
		return (
			<p className={ classes.center }>Loading...</p>
		);
	}
	
	const filteredYear = +filterData[0];
	const filteredMonth = +filterData[1];
	
	if ( isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12 ) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>Invalid filter. Please adjust your values!</p>
				</ErrorAlert>
				<div className={ classes.center }>
					<Button link={ '/events' }>Show All Events</Button>
				</div>
			</Fragment>
		);
	}
	
	const filteredEvents = getFilteredEvents({
		year: filteredYear,
		month: filteredMonth
	});
	
	if ( !filteredEvents || filteredEvents.length === 0 ) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<div className={ classes.center }>
					<Button link={ '/events' }>Show All Events</Button>
				</div>
			</Fragment>
		);
	}
	
	const date = new Date(filteredYear, filteredMonth - 1);
	
	return (
		<div>
			<ResultsTitle date={ date }/>
			<EventList items={ filteredEvents }/>
		</div>
	);
};

const styles = makeStyles({
	center: {
		margin: 'auto',
		textAlign: 'center'
	}
});

export default FilteredEventsPage;
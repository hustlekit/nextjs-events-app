import { Fragment } from 'react';

import { getFeaturedEvents, getEventById } from "../../helpers/api-util";
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';

const EventDetailPage = (props) => {
	const { event } = props;
	
	if ( !event ) {
		return (
			<div className={ 'center' }>
				<p>Loading...</p>
			</div>
		);
	}
	
	return (
		<Fragment>
			<EventSummary title={ event.title }/>
			<EventLogistics
				date={ event.date }
				address={ event.location }
				image={ event.image }
				imageAlt={ event.title }
			/>
			<EventContent>
				<p>{ event.description }</p>
			</EventContent>
		</Fragment>
	);
};

export const getStaticProps = async (context) => {
	const eventId = context.params.eventId;
	
	const event = await getEventById(eventId);
	
	return {
		props: {
			event: event
		},
		revalidate: 600
	};
};

export const getStaticPaths = async (context) => {
	const events = await getFeaturedEvents();
	const paths = events.map(event => ( { params: { eventId: event.id } } ));
	
	return {
		paths: paths,
		fallback: 'blocking'
	};
};

export default EventDetailPage;
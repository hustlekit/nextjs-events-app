import axios from 'axios';

import { getFeaturedEvents } from '../helpers/api-util';

import EventList from '../components/events/EventList';

const HomePage = (props) => {
	return (
		<div>
			<EventList items={ props.events }/>
		</div>
	);
};

export const getStaticProps = async (context) => {
	const events = await getFeaturedEvents();
	
	return {
		props: {
			events: events
		},
		revalidate: 3600
	};
};

export default HomePage;
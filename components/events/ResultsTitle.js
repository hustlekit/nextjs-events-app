import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';

import Button from '../ui/Button';

function ResultsTitle(props) {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	const { date } = props;
	
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric'
	});
	
	return (
		<section className={ classes.title }>
			<h1>Events in { humanReadableDate }</h1>
			<Button link="/events">Show all events</Button>
		</section>
	);
}

const styles = makeStyles({
	title: {
		margin: '2rem auto',
		width: '90%',
		maxWidth: '40rem',
		textAlign: 'center'
	}
});

export default ResultsTitle;

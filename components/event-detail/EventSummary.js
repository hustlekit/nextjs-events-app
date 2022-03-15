import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';

const EventSummary = (props) => {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	const { title } = props;
	
	return (
		<section className={ `${ classes.summary } ${ isTabletSize ? 'tabletSize' : '' }` }>
			<h1>{ title }</h1>
		</section>
	);
};

const styles = makeStyles({
	summary: {
		width: '100%',
		height: '30vh',
		backgroundImage: 'linear-gradient(to bottom left,  #008b79, #1180a1)',
		'& h1': {
			margin: 0,
			paddingTop: '3rem',
			fontSize: '2rem',
			textAlign: 'center',
			textShadow: '0 3px 10px rgba(0, 0, 0, 0.5)',
			color: 'white'
		},
		'&.tabletSize h1': {
			fontSize: '5rem'
		}
	}
});

export default EventSummary;
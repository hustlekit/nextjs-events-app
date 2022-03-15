import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';

import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './LogisticsItem';

const EventLogistics = (props) => {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	const { date, address, image, imageAlt } = props;
	
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	const addressText = address.replace(', ', '\n');
	
	return (
		<section className={ `${ classes.logistics } ${ isTabletSize ? 'tabletSize' : '' }` }>
			<div className={ `${ classes.image } ${ isTabletSize ? 'tabletSize' : '' }` }>
				<img src={ `/${ image }` } alt={ imageAlt }/>
			</div>
			<ul className={ `${ classes.list } ${ isTabletSize ? 'tabletSize' : '' }` }>
				<LogisticsItem icon={ DateIcon }>
					<time>{ humanReadableDate }</time>
				</LogisticsItem>
				<LogisticsItem icon={ AddressIcon }>
					<address>{ addressText }</address>
				</LogisticsItem>
			</ul>
		</section>
	);
};

const styles = makeStyles({
	logistics: {
		boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
		borderRadius: '6px',
		backgroundColor: '#2b2b2b',
		padding: '2rem',
		maxWidth: '50rem',
		width: '80%',
		margin: '-3rem auto',
		color: '#d5eeeb',
		display: 'flex',
		justifyContent: 'space-between',
		gap: '1rem',
		flexDirection: 'column',
		alignItems: 'center',
		'& address': {
			whiteSpace: 'pre'
		},
		'&.tabletSize': {
			padding: '2rem',
			margin: '-5rem auto',
			gap: '3rem',
			flexDirection: 'row',
			alignItems: 'stretch'
		}
	},
	image: {
		width: '10rem',
		height: '10rem',
		borderRadius: '50%',
		overflow: 'hidden',
		border: '5px solid white',
		'& img': {
			width: '10rem',
			height: '10rem',
			objectFit: 'cover'
		},
		'&.tabletSize': {
			width: '20rem',
			height: '20rem'
		},
		'&.tabletSize img': {
			width: '20rem',
			height: '20rem'
		}
	},
	list: {
		flex: 3,
		display: 'flex',
		gap: '2rem',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		'&.tabletSize': {
			alignItems: 'flex-start'
		}
	}
});

export default EventLogistics;

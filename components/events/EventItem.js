import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { makeStyles } from '@mui/styles';

import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	
	const { event } = props;
	
	const date = new Date(event.date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	
	const address = event.location.replace(', ', '\n');
	const exploreLink = `/events/${ event.id }`;
	
	return (
		<li className={ `${ classes.item } ${ isTabletSize ? 'tabletSize' : '' }` }>
			<img src={ '/' + event.image } alt={ event.title }/>
			<div className={ `${ classes.content } ${ isTabletSize ? 'tabletSize' : '' }` }>
				<div>
					<h2>{ event.title }</h2>
					<div className={ classes.date }>
						<DateIcon />
						<time>{ date }</time>
					</div>
					<div className={ classes.address }>
						<AddressIcon />
						<address>{ address }</address>
					</div>
				</div>
				<div className={ `${ classes.actions } ${ isTabletSize ? 'tabletSize' : '' }` }>
					<Button link={ exploreLink }>
						<span>Explore Event</span>
						<span className={ classes.icon }><ArrowRightIcon/></span>
					</Button>
				</div>
			</div>
		</li>
	)
}

const styles = makeStyles({
	item: {
		boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2)',
		borderRadius: '8px',
		overflow: 'hidden',
		backgroundColor: 'white',
		margin: '1rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		'& img': {
			width: '100%',
			objectFit: 'cover',
			height: '10rem'
		},
		'&.tabletSize': {
			flexDirection: 'row',
			'& img': {
				width: '40%',
				height: '14rem'
			},
		}
	},
	content: {
		width: '100%',
		padding: '0 1rem',
		textAlign: 'center',
		'& h2': {
			margin: '0.5rem 0'
		},
		'& time': {
			color: '#666666',
			fontWeight: 'bold',
		},
		'& address': {
			margin: '0.5rem 0',
			color: '#666666',
			whiteSpace: 'pre'
		},
		'&.tabletSize': {
			width: '60%',
			padding: '0px',
			textAlign: 'left',
			'& h2': {
				margin: '1rem 0'
			}
		}
	},
	date: {
		display: 'flex',
		gap: '0.5rem',
		alignItems: 'center',
		'& svg': {
			width: '1.25rem',
			height: '1.25rem',
			color: '#666666'
		}
	},
	address: {
		display: 'flex',
		gap: '0.5rem',
		alignItems: 'center',
		'& svg': {
			width: '1.25rem',
			height: '1.25rem',
			color: '#666666'
		}
	},
	actions: {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
		'& a': {
			display: 'block'
		},
		'& a span': {
			verticalAlign: 'middle'
		},
		'&.tabletSize': {
			flexDirection: 'row',
			justifyContent: 'flex-end',
		}
	},
	icon: {
		marginLeft: '0.5rem',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& svg': {
			width: '1.25rem',
			height: '1.25rem'
		}
	}
});

export default EventItem;
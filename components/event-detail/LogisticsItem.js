import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';

const LogisticsItem = (props) => {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	const { icon: Icon } = props;
	
	return (
		<li className={ `${ classes.item } ${ isTabletSize ? 'tabletSize' : '' }` }>
        <span className={ classes.icon }>
            <Icon/>
        </span>
			<span>{ props.children }</span>
		</li>
	);
}

const styles = makeStyles({
	item: {
		display: 'flex',
		fontSize: '1.5rem',
		alignItems: 'center',
		flexDirection: 'column',
		textAlign: 'center',
		color: '#aefff8',
		'& span': {
			display: 'block'
		},
		'&.tabletSize': {
			alignItems: 'flex-start',
			textAlign: 'left'
		}
	},
	icon: {
		marginRight: '1rem',
		color: '#18e0d0',
		"& svg": {
			width: '2rem',
			height: '2rem'
		}
	}
});

export default LogisticsItem;

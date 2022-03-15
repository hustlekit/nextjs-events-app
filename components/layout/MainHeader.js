import Link from 'next/link';

import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';

const MainHeader = (props) => {
	const classes = styles();
	const isTabletSize = useMediaQuery({ minWidth: '768px' });
	
	return (
		<header className={ classes.header }>
			<div className={ `${ classes.logo } ${ isTabletSize ? 'tabletSize' : '' }` }>
				<Link href={ '/' }>
					<a>NextEvents</a>
				</Link>
			</div>
			<nav className={ `${ classes.navigation } ${ isTabletSize ? 'tabletSize' : '' }` }>
				<ul>
					<li>
						<Link href={ '/events' }>
							<a>Browse All Events</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

const styles = makeStyles({
	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		padding: '1rem 10%',
		height: '5rem',
		backgroundColor: '#202020'
	},
	logo: {
		fontSize: '1.5rem',
		fontFamily: 'Fira, sans-serif',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#94fdfd',
		'& a': {
			textDecoration: 'none',
			color: '#94fdfd'
		},
		'&.tabletSize': {
			fontSize: '2.5rem'
		}
	},
	navigation: {
		'& a': {
			textDecoration: 'none',
			color: '#74dacc',
			fontSize: '1rem'
		},
		'&.tabletSize a': {
			fontSize: '1.5rem'
		}
	}
});

export default MainHeader;
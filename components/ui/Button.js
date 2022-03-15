import Link from 'next/link';

import { makeStyles } from "@mui/styles";

const Button = props => {
	const classes = styles();
	
	if ( props.link ) {
		return (
			<Link href={ props.link }>
				<a className={ classes.btn }>
					{ props.children }
				</a>
			</Link>
		);
	}
	
	
	return (
		<button className={ classes.btn } onClick={ props.onClick }>
			{ props.children }
		</button>
	);
};

const styles = makeStyles({
	btn: {
		textDecoration: 'none',
		cursor: 'pointer',
		font: 'inherit',
		backgroundColor: '#03be9f',
		border: '1px solid #03be9f',
		borderRadius: '6px',
		color: '#dafff7',
		padding: '0.5rem 1.5rem',
		textAlign: 'center',
		boxShadow: '0 1px 6px rgba(0, 0, 0, 0)',
		'&:hover, &:active': {
			backgroundColor: '#02afa1',
			borderColor: '#02afa1'
		}
	}
});

export default Button;
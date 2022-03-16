import { makeStyles } from '@mui/styles';

const ErrorAlert = (props) => {
	const classes = styles();
	
	return (
		<div className={ classes.alert }>{ props.children }</div>
	);
};

const styles = makeStyles({
	alert: {
		margin: '1rem auto',
		padding: '1rem 2rem',
		width: '90%',
		maxWidth: '40rem',
		backgroundColor: '#d5bdfc',
		color: '#38028d',
		fontWeight: 'bold',
		fontSize: '1.5rem',
		textAlign: 'center',
		borderRadius: '6px'
	}
});

export default ErrorAlert;
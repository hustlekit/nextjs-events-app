import { makeStyles } from '@mui/styles';

const EventContent = props => {
	const classes = styles();
	
	return (
		<section className={ classes.content }>
			{ props.children }
		</section>
	);
}

const styles = makeStyles({
	content: {
		fontSize: '1.5rem',
		color: '#3a3a3a',
		width: '90%',
		maxWidth: '40em',
		margin: 'auto',
		marginTop: '8rem',
		textAlign: 'center'
	}
});

export default EventContent;
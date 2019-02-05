import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	}
});

function PaperSheet(props) {
	const { classes } = props;

	return (
		<div>
			<Paper className={classes.root} elevation={1}>
				<Typography variant='h5' component='h3'>
					MERN Books: Google Books API
				</Typography>
				<Typography component='p'>Search For & Save Books of Interest</Typography>
			</Paper>
		</div>
	);
}

PaperSheet.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
const styles = (theme) => ({
	card: {
		maxWidth: 400
	},
	media: {
		height: 400
		// paddingTop: '100%' // 16:9
	},
	actions: {
		display: 'flex'
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
});

class ResultsCard extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			// <Grid item xs={6}>
			<Card className={classes.card}>
				<Grid item xs={12}>
					<CardHeader title={this.props.title} subheader={this.props.author} />

					<CardMedia
						className={classes.media}
						image={this.props.image}
						alt={'Image of' + this.props.title}
						title={this.props.title}
					/>
				</Grid>

				<Grid item xs={12}>
					<CardContent>
						<Typography component='p'>{this.props.description}</Typography>
					</CardContent>
				</Grid>

				<CardActions className={classes.actions} disableActionSpacing>
					<Grid justify='space-between' container spacing={16}>
						<Grid item>
							<Fab color='primary' href={this.props.link} aria-label='Add' className={classes.fab}>
								View
							</Fab>
						</Grid>

						<Grid item>
							<Fab
								color='secondary'
								aria-label='Edit'
								id={this.props.id}
								onClick={(event) => this.props.saveBook(event)}
								className={classes.fab}>
								Save
							</Fab>
						</Grid>
					</Grid>
				</CardActions>
			</Card>
			// </Grid>
		);
	}
}

ResultsCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultsCard);

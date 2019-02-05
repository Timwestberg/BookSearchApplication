import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './style.css';

{
	/* <div id='SearchDiv'>
	<h1>Book Search</h1>
	<SearchInput />
	<SearchButton searchBooks={props.searchBooks} />
</div>; */
}

const styles = (theme) => ({
	root: {
		width: '100%',
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit',
		width: '100%'
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: 'none'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	}
});

function SimpleAppBar(props) {
	const { classes } = props;

	function SearchInput() {
		return (
			<TextField
				required
				id='SearchBar'
				label='Book Name'
				className={classes.textField}
				margin='normal'
				variant='outlined'
			/>
		);
	}

	function SearchButton(props) {
		return (
			<Button
				type='submit'
				id='SearchButton'
				onClick={(event) => props.searchBooks(event)}
				variant='contained'
				color='primary'
				className={classes.button}>
				Search Google Books
			</Button>
		);
	}

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Toolbar>
					<Typography variant='h6' color='inherit'>
						Book Search
					</Typography>
					<SearchInput />
					<SearchButton searchBooks={props.searchBooks} />
				</Toolbar>
			</AppBar>
		</div>
	);
}

SimpleAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);

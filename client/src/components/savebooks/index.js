import React from 'react';
// import './style.css';
import SavedCard from './form/savedBooks';
import Grid from '@material-ui/core/Grid';

function SavedWrapper(props) {
	console.log(props);
	return props.results.length === 0 ? (
		<div id='ResultsWrapper'>
			<h1> Search Results </h1>
		</div>
	) : (
		<div id='ResultsWrapper'>
			<h1> Saved Results </h1>
			<Grid container spacing={24}>
				{props.results.map((book) => {
					return (
						<Grid item xs={6} md={4}>
							<SavedCard
								key={book.id}
								id={book.id}
								image={book.image}
								title={book.title}
								author={book.authors}
								description={book.description}
								link={book.link}
								saveBook={props.saveBook}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default SavedWrapper;

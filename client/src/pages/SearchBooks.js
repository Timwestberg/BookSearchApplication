import React, { Component } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero';
import SearchDiv from '../components/SearchDiv';
import ResultsWrapper from '../components/ResultsWrapper';

class SearchPage extends Component {
	state = {
		results: []
	};

	searchBooks = (event) => {
		event.preventDefault();
		let searchTerm = document.getElementById('SearchBar').value;
		API.search(searchTerm)
			.then((res) => {
				let results = res.data.items;
				results = results.map((result) => {
					console.log(result);
					let book = {
						id: result.id,
						title: result.volumeInfo.title,
						link: result.volumeInfo.canonicalVolumeLink,
						authors: result.volumeInfo.authors,
						image: result.volumeInfo.imageLinks.thumbnail,
						description: result.volumeInfo.description
					};
					return book;
				});
				this.setState({ results: results });
			})
			.catch((err) => console.log(err));
	};

	saveBook = (event) => {
		event.preventDefault();
		let bookSelected = this.state.results.filter((book) => book.id === event.target.id);
		bookSelected = bookSelected[0];
		API.save(bookSelected).then(console.log(bookSelected)).catch((err) => console.log(err));
	};

	render() {
		return (
			<div id='AppViewport'>
				<Hero />
				<SearchDiv searchBooks={this.searchBooks} />
				<ResultsWrapper results={this.state.results} saveBook={this.saveBook} />
			</div>
		);
	}
}

export default SearchPage;

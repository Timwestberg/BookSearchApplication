import React, { Component } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero';
import SavedBooks from '../components/savebooks';

class SavePage extends Component {
	state = {
		results: []
	};

	getBooks = () => {
		API.load()
			.then((data) => {
				this.setState({ results: data.data });
				console.log(this.state);
			})
			.catch((err) => console.log(err));
	};

	removeBook = (id) => {
		API.remove(id)
			.then(() => {
				this.getBooks();
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.getBooks();
	}
	render() {
		return (
			<div id='AppViewport'>
				<Hero />
				<SavedBooks saved={this.state.results} removeBook={this.removeBook} />
			</div>
		);
	}
}

export default SavePage;

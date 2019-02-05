import axios from 'axios';
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const APIKEY = '&key=AIzaSyBslHGdQYhHx2RKwFlOakGZZQfZWCZB9tQ';

export default {
	search: function(query) {
		return axios.get(BASEURL + query + APIKEY);
	},
	// Saves a book to the database
	save: function(bookData) {
		return axios.post('/api/books', bookData);
	},
	// Deletes the book with the given id
	remove: function(id) {
		return axios.delete('/api/books/saved/' + id);
	},
	load: function() {
		return axios.get('/api/books');
	}
};

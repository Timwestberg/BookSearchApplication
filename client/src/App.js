import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import SearchPage from './pages/SearchBooks';
import SavedPage from './pages/SavedBooks';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={SearchPage} />
					<Route exact path='/saved' component={SavedPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

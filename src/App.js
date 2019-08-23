import React, { Fragment } from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Fragment>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/rooms/' exact component={Rooms} />
				<Route path='/rooms/:slug' exact component={SingleRoom} />
				<Route component={Error} />
			</Switch>
		</Fragment>
	);
}

export default App;

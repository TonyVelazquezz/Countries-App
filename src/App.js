import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Vistas
import Home from './views/Home';
import CountryDetails from './views/CountryDetails';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/details/:country" exact>
						<CountryDetails />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'weather-icons/css/weather-icons.css';

//Vistas
import Home from './views/Home';
import CountryDetails from './views/CountryDetails';
import Weather from './views/Weather';

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

					<Route path="/details/weather/:capital" exact>
						<Weather />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;

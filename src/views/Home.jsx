import React, { useState } from 'react';
import Countries from '../components/Countries';
import SearchCountry from '../components/SearchCountry';
import SearchCountryGrid from '../components/SearchCountryGrid';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const [searchCountry, setSearchCountry] = useState(['']);

	return (
		<div className="home">
			<div className="header">
				<h1 className="header__title">Countries</h1>
				<FontAwesomeIcon className="header__icon" icon={faGlobeAmericas} />
				<span className="header__title--app">App</span>

				<SearchCountry setSearchCountry={setSearchCountry} />
			</div>

			<>
				{searchCountry.map(country => (
					<SearchCountryGrid key={country} country={country} />
				))}
			</>

			<Countries />
		</div>
	);
};

export default Home;

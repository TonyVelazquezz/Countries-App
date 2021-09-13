import React, { useState } from 'react';
import Countries from '../components/Countries';
import SearchCountry from '../components/SearchCountry';
import SearchCountryGrid from '../components/SearchCountryGrid';

const Home = () => {
	const [searchCountry, setSearchCountry] = useState(['']);

	return (
		<>
			<div className="header container">
				<h1 className="header__title">Countries</h1>
				<SearchCountry setSearchCountry={setSearchCountry} />
			</div>

			<ol>
				{searchCountry.map(country => (
					<SearchCountryGrid key={country} country={country} />
				))}
			</ol>

			<Countries />
		</>
	);
};

export default Home;

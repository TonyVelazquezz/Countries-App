import React, { useState } from 'react';
import Countries from '../components/Countries';
import SearchCountry from '../components/SearchCountry';
import SearchCountryGrid from '../components/SearchCountryGrid';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const [searchCountry, setSearchCountry] = useState(['']);

	return (
		<div className="home">
			<section className="home__header-section">
				<div className="home__header">
					<h1 className="home__header-title">Countries</h1>
					<FontAwesomeIcon className="home__header-icon" icon={faGlobeAmericas} />
					<span className="home__header-title--app">App</span>

					<SearchCountry setSearchCountry={setSearchCountry} />
				</div>

				<>
					{searchCountry.map(country => (
						<SearchCountryGrid key={country} country={country} />
					))}
				</>

				<Countries />
			</section>
		</div>
	);
};

export default Home;

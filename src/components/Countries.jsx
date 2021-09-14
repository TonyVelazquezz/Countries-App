import React, { useState, useEffect } from 'react';
import CountryGrid from './CountryGrid';

const URL = 'https://restcountries.eu/rest/v2/all';

const Countries = () => {
	const [countries, setCountries] = useState([]);

	try {
		const fetchCountryData = async () => {
			const response = await fetch(URL);
			const countries = await response.json();
			// console.log(countries);
			setCountries(countries);
		};
		useEffect(() => {
			fetchCountryData();
		}, []);
	} catch (error) {
		console.error(error);
	}

	return (
		<>
			<section className="grid container">
				{countries.map(country => {
					return <CountryGrid key={country.numericCode} {...country} />;
				})}
			</section>
		</>
	);
};

export default Countries;

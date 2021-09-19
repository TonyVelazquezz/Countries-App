import React from 'react';
import useFetchCountries from '../hooks/useFetchCountries';
import CountryGrid from './CountryGrid';
import Preloader from '../hooks/Preloader';

const Countries = () => {
	const { countries, loading } = useFetchCountries();

	return (
		<>
			{loading && <Preloader />}
			<section className="grid container">
				{countries.map(country => {
					return <CountryGrid key={country.numericCode} {...country} />;
				})}
			</section>
		</>
	);
};

export default Countries;

import { useState, useEffect } from 'react';

const useFetchCountries = () => {
	const [state, setState] = useState({
		countries: [],
		loading: null,
	});

	try {
		const URL = 'https://restcountries.eu/rest/v2/all';
		const fetchCountryData = async () => {
			const response = await fetch(URL);
			const result = await response.json();
			setState({
				countries: result,
				loading: false,
			});
		};

		useEffect(() => {
			setState({
				countries: [],
				loading: true,
			});
			fetchCountryData();
		}, []); // eslint-disable-line react-hooks/exhaustive-deps
	} catch (error) {
		console.error(error);
	}

	return state;
};

export default useFetchCountries;

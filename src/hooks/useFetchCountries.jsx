import { useState, useEffect } from 'react';

const useFetchCountries = (pageNumber, setHasMore) => {
	const [state, setState] = useState([]);

	useEffect(() => {
		const URL = `https://restcountries.com/v3.1/all`;

		try {
			const countriesPerPage = 12;

			const fetchCountryData = async () => {
				const response = await fetch(URL);
				const result = await response.json();

				//Pagination
				const indexCountries = pageNumber * countriesPerPage;
				const showCountries = result.slice(
					indexCountries - countriesPerPage,
					indexCountries
				);

				const totalPages = Math.ceil(result.length / countriesPerPage);

				setState(prevCountries => prevCountries.concat(showCountries));
				setHasMore(pageNumber < totalPages);
			};
			fetchCountryData();
		} catch (error) {
			console.error(error);
		}
	}, [pageNumber, setHasMore]);

	return state;
};

export default useFetchCountries;

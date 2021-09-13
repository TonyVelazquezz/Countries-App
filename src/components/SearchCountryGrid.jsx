import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SearchCountryGrid = ({ country }) => {
	const [flags, setFlags] = useState([]);
	const [error, setError] = useState(false);
	const isMounted = useRef(true);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	try {
		const FetchCountryName = async () => {
			const URL = `https://restcountries.eu/rest/v2/name/${encodeURI(
				country
			)}?fullText=true`;
			const response = await fetch(URL);
			const data = await response.json();
			if (data.status) {
				setError(data.message);
			} else {
				const dataCountry = data.map(card => {
					return {
						capital: card.capital,
						code: card.alpha3Code,
						flag: card.flag,
						id: card.numericCode,
						name: card.name,
						language: card.languages[0].name,
					};
				});
				// console.log(dataCountry);
				if (isMounted.current) {
					setFlags(dataCountry);
					setError(false);
				}
			}
		};

		useEffect(() => {
			if (country.trim().length > 2) {
				FetchCountryName();
			}
		}, []);
	} catch (error) {
		console.warn(error);
	}

	return (
		<>
			{error ? (
				<div className="error container">
					<h2 className="error__text">Country Not Found</h2>
				</div>
			) : (
				flags.map(({ id, flag, name }) => (
					<div className="card" key={id}>
						<h3 className="card__name">{name}</h3>
						<img className="card__img" src={flag} alt={name} />
						<Link className="card__details" to={`/details/${name}`}>
							more details
						</Link>
					</div>
				))
			)}
		</>
	);
};

export default SearchCountryGrid;

import React, { useState, useEffect } from 'react';
import FetchCountryName from '../helpers/FetchCountryName';
import { Link } from 'react-router-dom';
// import Loader from '../hooks/Loader';

const SearchCountryGrid = ({ country }) => {
	const [flags, setFlags] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (country.trim().length > 2) {
			try {
				FetchCountryName(country).then(result => {
					// console.log(result);
					result.status ? setError(result.message) : setFlags(result);
				});
			} catch (error) {
				console.error(error);
			}
		}
	}, [country]);

	return (
		<>
			<div>
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
			</div>
		</>
	);
};

export default SearchCountryGrid;

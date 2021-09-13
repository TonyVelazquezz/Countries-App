import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = props => {
	const { country } = useParams();
	const [details, setDetails] = useState([]);
	const [error, setError] = useState(false);
	const isMounted = useRef(true);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	try {
		const FetchCountryDetails = async () => {
			const URL = `https://restcountries.eu/rest/v2/name/${encodeURI(
				country
			)}?fullText=true`;
			const response = await fetch(URL);
			const data = await response.json();
			if (data.status) {
				setError(data.message);
			} else {
				const countryDetails = data.map(detail => {
					return {
						callingCode: detail.callingCodes[0],
						capital: detail.capital,
						code2: detail.alpha2Code,
						code3: detail.alpha3Code,
						flag: detail.flag,
						numericCode: detail.numericCode,
						name: detail.name,
						language: detail.languages[0].name,
						region: detail.region,
						subRegion: detail.subregion,
					};
				});
				// console.log(dataCountry);
				if (isMounted.current) {
					setDetails(countryDetails);
					setError(false);
				}
			}
		};

		useEffect(() => {
			if (country.trim().length > 2) {
				FetchCountryDetails();
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
				details.map(
					({
						numericCode,
						flag,
						name,
						capital,
						region,
						callingCode,
						code2,
						code3,
					}) => (
						<div className="card container" key={numericCode}>
							<h3 className="card__name">{name}</h3>
							<div className="card__more-details">
								<img className="card__img" src={flag} alt={name} />

								<p className="card__text">
									<span className="card__text-bold">Capital: </span>
									{capital}
								</p>
								<p className="card__text">
									<span className="card__text-bold">Region: </span>
									{region}
								</p>
								<p className="card__text">
									<span className="card__text-bold">Sub-Region: </span>
									{region}
								</p>
								<p className="card__text">
									<span className="card__text-bold">Calling Code: </span>
									{callingCode}
								</p>
								<p className="card__text">
									<span className="card__text-bold">Alpha-2 code: </span>
									{code2}
								</p>
								<p className="card__text">
									<span className="card__text-bold">Alpha-3 code: </span>
									{code3}
								</p>
							</div>
						</div>
					)
				)
			)}
		</>
	);
};

export default CountryDetails;

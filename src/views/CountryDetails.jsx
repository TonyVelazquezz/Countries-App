import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Error from '../helpers/Error';
import Preloader from '../hooks/Preloader';
import useLoader from './../hooks/useLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCloud } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const CountryDetails = () => {
	const { country } = useParams();
	const { data, loading } = useLoader(country);
	const error = data.status;

	return (
		<>
			{loading && <Preloader />}
			{error ? (
				<Error />
			) : (
				data.map(({ flag, name, continent, capital, currency, language }) => (
					<div className="card-details animate__animated animate__fadeIn animate__slow" key={uuidv4}>
						<section className="card-details__more-details">
							<div className="card-details__img-container">
								<img className="card-details__img" src={flag} alt={name} />
							</div>

							<div className="card-details__text-container">
								<h3 className="card-details__name">{name}</h3>
								<p className="card-details__text">
									<span className="card-details__text-bold">Capital: </span>
									{capital}
								</p>
								<p className="card-details__text">
									<span className="card-details__text-bold">Continent: </span>
									{continent}
								</p>
								<p className="card-details__text">
									<span className="card-details__text-bold">Currency: </span>
									{currency.map(item => (
										<span key={uuidv4()}>{item.name}</span>
									))}
								</p>
								<p className="card-details__text">
									<span className="card-details__text-bold">Currency Symbol: </span>
									{currency.map(item => (
										<span key={uuidv4()}>{item.symbol}</span>
									))}
								</p>
								<p className="card-details__text">
									<span className="card-details__text-bold">Language: </span>
									{language}
								</p>

								{name === 'Antarctica' ? null : (
									<Link className="card__details-btn" to={`/details/weather/${capital}`}>
										<FontAwesomeIcon className="card__icon" icon={faCloud} />
										Get the Weather of {`${capital}`}
									</Link>
								)}

								<Link to={'/'} className="home-link">
									<FontAwesomeIcon className="home-btn" icon={faHome} />
								</Link>
							</div>
						</section>
					</div>
				))
			)}
		</>
	);
};

export default CountryDetails;

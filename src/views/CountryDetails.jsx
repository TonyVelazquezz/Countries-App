import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Error from '../helpers/Error';
import Preloader from '../hooks/Preloader';
import useLoader from './../hooks/useLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCloud } from '@fortawesome/free-solid-svg-icons';

const CountryDetails = () => {
	const { country } = useParams();
	const { data, loading } = useLoader(country);
	// console.log(data);
	const error = data.status;

	return (
		<>
			{loading && <Preloader />}
			{error ? (
				<Error />
			) : (
				data.map(
					({ id, flag, name, capital, region, callingCode, code2, code3 }) => (
						<div
							className="card-details container animate__animated animate__fadeIn animate__slow"
							key={id}
						>
							<h3 className="card-details__name">{name}</h3>
							<div className="card-details__more-details">
								<div className="card-details__img-container">
									<img className="card-details__img" src={flag} alt={name} />
								</div>

								<div className="card-details__text-container">
									<p className="card-details__text">
										<span className="card-details__text-bold">Capital: </span>
										{capital}
									</p>
									<p className="card-details__text">
										<span className="card-details__text-bold">Region: </span>
										{region}
									</p>
									<p className="card-details__text">
										<span className="card-details__text-bold">Sub-Region: </span>
										{region}
									</p>
									<p className="card-details__text">
										<span className="card-details__text-bold">Calling Code: </span>
										{callingCode}
									</p>
									<p className="card-details__text">
										<span className="card-details__text-bold">Alpha-2 code: </span>
										{code2}
									</p>
									<p className="card-details__text">
										<span className="card-details__text-bold">Alpha-3 code: </span>
										{code3}
									</p>
									{name === 'Antarctica' ? null : (
										<Link
											className="card__details-btn"
											to={`/details/weather/${capital}`}
										>
											<FontAwesomeIcon className="card__icon" icon={faCloud} />
											Get the Weather of {`${capital}`}
										</Link>
									)}
									<Link to={'/'}>
										<FontAwesomeIcon className="home-btn" icon={faHome} />
									</Link>
								</div>
							</div>
						</div>
					)
				)
			)}
		</>
	);
};

export default CountryDetails;

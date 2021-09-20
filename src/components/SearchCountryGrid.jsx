import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../hooks/Loader';
import useLoader from '../hooks/useLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchCountryGrid = ({ country }) => {
	const { data, loading } = useLoader(country);
	const error = data.status;

	const [display, setDisplay] = useState('block');

	const handleClose = () => {
		setDisplay('none');
	};
	console.log(display);

	return (
		<>
			{loading && <Loader />}
			<div>
				{error ? (
					<div>
						<div className="error container animate__animated animate__bounceInLeft">
							<h2 className="error__text">Country Not Found</h2>
						</div>
					</div>
				) : (
					data.map(({ id, flag, name }) => (
						<div key={id} style={{ display: `${display}` }}>
							<div className="card container loading animate__animated animate__bounceInLeft">
								<h3 className="card__name">{name}</h3>
								<img className="card__img" src={flag} alt={name} />

								<div className="card__buttons">
									<Link className="card__details-btn" to={`/details/${name}`}>
										more details
									</Link>

									{country && (
										<button
											className="card__close-btn"
											onClick={handleClose}
											style={{ display: `${display}` }}
										>
											<FontAwesomeIcon className="card__close-icon" icon={faTimes} />
										</button>
									)}
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default SearchCountryGrid;

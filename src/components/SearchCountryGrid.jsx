import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../hooks/Loader';
import useLoader from '../hooks/useLoader';

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
			{country && (
				<button
					className="card__closeBtn"
					onClick={handleClose}
					style={{ display: `${display}` }}
				>
					Close
				</button>
			)}
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
							<div className="card loading animate__animated animate__bounceInLeft">
								<h3 className="card__name">{name}</h3>
								<img className="card__img" src={flag} alt={name} />
								<Link className="card__details-btn" to={`/details/${name}`}>
									more details
								</Link>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default SearchCountryGrid;

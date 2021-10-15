import React from 'react';
import { Link } from 'react-router-dom';

const CountryGrid = ({ flags, name }) => {
	return (
		<div className="grid__item animate__animated animate__fadeInDown">
			<Link to={`/details/${name.common}`}>
				<img className="grid__img" src={flags.png} alt={name.common} />
				<h2 className="grid__country-name">{name.common}</h2>
				<div className="grid__details-btn">more details</div>
			</Link>
		</div>
	);
};

export default CountryGrid;

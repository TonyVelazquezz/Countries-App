import React from 'react';
import { Link } from 'react-router-dom';

const CountryGrid = ({ flag, name }) => {
	return (
		<div className="grid__item animate__animated animate__fadeInDown">
			<Link to={`/details/${name}`}>
				<img className="grid__img" src={flag} alt={name} />
				<h2 className="grid__country-name">{name}</h2>
				<div className="grid__details-btn">more details</div>
			</Link>
		</div>
	);
};

export default CountryGrid;

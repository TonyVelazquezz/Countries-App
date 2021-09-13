import React from 'react';

const CountryGrid = ({ flag, name }) => {
	return (
		<div className="grid__item">
			<img className="grid__img" src={flag} alt={name} />
			<h2 className="grid__country-name">{name}</h2>
		</div>
	);
};

export default CountryGrid;

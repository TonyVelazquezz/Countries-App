import React, { useState } from 'react';

const SearchCountry = ({ setSearchCountry }) => {
	const [inputValue, setInputValue] = useState('');

	//mostrar o ocultar

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setSearchCountry([inputValue]);
			//Limpiar el input despues de hacer submit
			setInputValue('');
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				className="form__input"
				type="text"
				placeholder="search country..."
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

export default SearchCountry;

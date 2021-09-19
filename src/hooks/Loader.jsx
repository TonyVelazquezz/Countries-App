import React from 'react';
import './Loader.css';

const Loader = () => {
	return (
		<div>
			<h2 className="loading animate__animated animate__flash">Loading</h2>
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loader;

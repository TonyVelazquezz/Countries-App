import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
	return (
		<div>
			<div className="full-error">
				<h2 className="full-error__text">Country Not Found</h2>
				<FontAwesomeIcon className="full-error__icon" icon={faSkull} />
				<p className="full-error__description">
					Please make sure the country url is correct
				</p>
			</div>
		</div>
	);
};

export default Error;

import { useState, useEffect } from 'react';
import FetchCountryName from '../helpers/FetchCountryName';

const useLoader = country => {
	const [state, setState] = useState({
		data: [],
		loading: null,
	});

	useEffect(() => {
		if (country.trim().length > 2) {
			setState({
				data: [],
				loading: true,
			});

			try {
				FetchCountryName(country).then(result => {
					// console.log(result);

					setState({
						data: result,
						loading: false,
					});
				});
			} catch (error) {
				console.error(error);
			}
		}
	}, [country]);

	return state;
};

export default useLoader;

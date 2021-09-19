import { useState, useEffect } from 'react';
import FetchWeather from '../helpers/FetchWeather';

const useWeather = capital => {
	const [state, setState] = useState({
		data: {},
		loading: null,
	});

	useEffect(() => {
		setState({
			data: {},
			loading: true,
		});

		try {
			FetchWeather(capital).then(result => {
				setState({
					data: result,
					loading: false,
				});
			});
		} catch (error) {
			console.error(error);
		}
	}, [capital]);

	return state;
};

export default useWeather;

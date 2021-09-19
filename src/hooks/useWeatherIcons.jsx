import { useState, useEffect } from 'react';
const useWeatherIcons = id => {
	const [state, setState] = useState({
		icon: {},
	});

	useEffect(() => {
		const weatherIcons = {
			Thunderstorm: 'wi wi-thunderstorm',
			Drizzle: 'wi wi-sleet',
			Rain: 'wi wi-rain',
			FreezingRain: 'wi wi-snow',
			Snow: 'wi wi-snow',
			Atmosphere: 'wi wi-fog',
			Clear: 'wi wi-day-sunny',
			Clouds: 'wi wi-day-fog',
		};

		if (id >= 200 && id <= 232) {
			setState({
				icon: weatherIcons.Thunderstorm,
			});
		} else if (id >= 300 && id <= 321) {
			setState({
				icon: weatherIcons.Drizzle,
			});
		} else if ((id >= 500 && id <= 504) || (id >= 520 && id <= 531)) {
			setState({
				icon: weatherIcons.Rain,
			});
		} else if (id === 511) {
			setState({
				icon: weatherIcons.FreezingRain,
			});
		} else if (id >= 600 && id <= 622) {
			setState({
				icon: weatherIcons.Snow,
			});
		} else if (id >= 701 && id <= 781) {
			setState({
				icon: weatherIcons.Atmosphere,
			});
		} else if (id === 800) {
			setState({
				icon: weatherIcons.Clear,
			});
		} else if (id >= 801 && id <= 804) {
			setState({
				icon: weatherIcons.Clouds,
			});
		}
	}, [id]);

	console.log(state);
	return state;
};

export default useWeatherIcons;

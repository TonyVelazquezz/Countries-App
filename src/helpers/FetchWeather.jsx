//
const FetchWeather = async capital => {
	const KEY = '10781aba8e8c92821d416234feb2e1d2';
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
		capital
	)}&appid=${KEY}&units=metric`;

	const response = await fetch(URL);
	const data = await response.json();
	// console.log(data);
	if (data.message) {
		return data;
	} else {
		const dataWeather = {
			temperature: data.main.temp,
			country: data.sys.country,
			description: data.weather[0].description,
			main: data.weather[0].main,
			id: data.weather[0].id,
		};
		return dataWeather;
	}

	// console.log(dataCountry);
};

export default FetchWeather;

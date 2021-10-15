//
const FetchCountryName = async country => {
	const URL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

	const response = await fetch(URL);
	const data = await response.json();
	if (data.status) {
		return data;
	} else {
		const dataCountry = data.map(card => {
			return {
				capital: card.capital[0],
				flag: card.flags.png,
				name: card.name.common,
				continent: card.continents[0],
				currency: Object.entries(card.currencies)[0],
				language: Object.entries(card.languages)[0][1],
			};
		});
		// console.log(dataCountry);

		return dataCountry;
	}
};

export default FetchCountryName;

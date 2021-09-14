const FetchCountryName = async country => {
	const URL = `https://restcountries.eu/rest/v2/name/${encodeURI(
		country
	)}?fullText=true`;
	const response = await fetch(URL);
	const data = await response.json();
	if (data.status) {
		return data;
	} else {
		const dataCountry = data.map(card => {
			return {
				capital: card.capital,
				code: card.alpha3Code,
				flag: card.flag,
				id: card.numericCode,
				name: card.name,
				language: card.languages[0].name,
			};
		});
		// console.log(dataCountry);

		return dataCountry;
	}
};

export default FetchCountryName;

//
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
				callingCode: card.callingCodes[0],
				capital: card.capital,
				code2: card.alpha2Code,
				code3: card.alpha3Code,
				flag: card.flag,
				id: card.numericCode,
				language: card.languages[0].name,
				name: card.name,
				region: card.region,
				subRegion: card.subregion,
			};
		});
		// console.log(dataCountry);

		return dataCountry;
	}
};

export default FetchCountryName;

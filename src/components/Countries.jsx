import React, { useState } from 'react';
import useFetchCountries from '../hooks/useFetchCountries';
import CountryGrid from './CountryGrid';
import Preloader from '../hooks/Preloader';
import InfiniteScroll from 'react-infinite-scroll-component';

const Countries = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const countries = useFetchCountries(pageNumber, setHasMore);

	return (
		<>
			<InfiniteScroll
				dataLength={countries.length}
				hasMore={hasMore}
				next={() => setPageNumber(pageNumber + 1)}
				loader={<Preloader />}
			>
				<section className="grid container">
					{countries.map(country => {
						return <CountryGrid key={country.numericCode} {...country} />;
					})}
				</section>
			</InfiniteScroll>
		</>
	);
};

export default Countries;

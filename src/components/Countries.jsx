import React, { useState } from 'react';
import useFetchCountries from '../hooks/useFetchCountries';
import CountryGrid from './CountryGrid';
import Preloader from '../hooks/Preloader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';

const Countries = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const countries = useFetchCountries(pageNumber, setHasMore);
	// console.log(countries);

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
						return <CountryGrid key={uuidv4()} {...country} />;
					})}
				</section>
			</InfiniteScroll>
		</>
	);
};

export default Countries;

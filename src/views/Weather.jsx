import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Preloader from '../hooks/Preloader';
import useWeather from '../hooks/useWeather';
import useWeatherIcons from '../hooks/useWeatherIcons';
import Clouds from '../assets/video/Clouds.mp4';
import Error from '../helpers/Error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import background from '../assets/img/background.jpg';

const Weather = () => {
	const { capital } = useParams();
	const { data: weather, loading } = useWeather(capital);
	// console.log(weather);
	const error = weather.message;

	const { icon } = useWeatherIcons(weather.id);

	const date = d => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		const day = days[d.getDay()];
		const date = d.getDate();
		const month = months[d.getMonth()];
		const year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<>
			{loading && <Preloader />}
			{error ? (
				<Error />
			) : (
				<div className="weather animate__animated animate__fadeIn animate__slow">
					<video className="weather__video" autoPlay loop muted>
						<source src={Clouds} type="video/mp4" />
					</video>

					<section className="weather__section container">
						<div className="weather__location-box">
							<h2 className="weather__location">{capital}</h2>
							<h2 className="weather__country">{weather.country}</h2>
							<h3 className="weather__date">{date(new Date())}</h3>
						</div>

						<div className="weather__data-box">
							<h2 className="weather__temperature">{`${Math.round(
								weather.temperature
							)}°c`}</h2>
							<div className="weather__icon">
								<i className={icon}></i>
							</div>
							<h3 className="weather__main">{weather.description}</h3>

							<Link to={'/'}>
								<FontAwesomeIcon className="home-btn--weather" icon={faHome} />
							</Link>
						</div>
					</section>
				</div>
			)}
		</>
	);
};

export default Weather;

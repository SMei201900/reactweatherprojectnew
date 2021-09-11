import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
	let [city, setCity] = useState(props.defaultCity);
	let [weatherData, setWeatherData] = useState({ ready: false });

	function weather(response) {
		setWeatherData({
			ready: true,
			city: response.data.name,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			humidity: response.data.main.humidity,
			windSpeed: response.data.wind.speed,
			date: new Date(response.data.dt * 1000),
		});
	}

	function search() {
		let apiKey = `640c47110d9c3fa96e9fd6063e6e2e9f`;
		let units = `metric`;
		let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
		axios.get(apiURL).then(weather);
	}

	function submitting(event) {
		event.preventDefault();
		search();
	}

	function cityname(event) {
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={submitting}>
			<input type="search" placeholder="Type a city" onChange={cityname} />
			<input type="submit" className="btn btn-primary" value="Search" />
		</form>
	);

	if (weatherData.ready) {
		return (
			<div className="Search">
				<div>{form}</div>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return form;
	}
}

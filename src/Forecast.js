import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState({});

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	function gettingForecast() {
		let apiKey = `640c47110d9c3fa96e9fd6063e6e2e9f`;
		let units = `metric`;
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${units}`;
		axios.get(apiURL).then(handleResponse);
	}

	if (loaded) {
		return (
			<div className="Forecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 4) {
							return (
								<div className="col-3" key={index}>
									<ForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		gettingForecast();

		return null;
	}
}

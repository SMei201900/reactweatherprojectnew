import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState({});

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="Forecast">
				<div className="row">
					<div className="col-3">
						<ForecastDay data={forecast[0]} />
					</div>
					<div className="col-3">
						<ForecastDay data={forecast[1]} />
					</div>
					<div className="col-3">
						<ForecastDay data={forecast[2]} />
					</div>
					<div className="col-3">
						<ForecastDay data={forecast[3]} />
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = `640c47110d9c3fa96e9fd6063e6e2e9f`;
		let units = `metric`;
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${units}`;
		axios.get(apiURL).then(handleResponse);

		return null;
	}
}

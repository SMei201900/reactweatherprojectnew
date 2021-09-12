import React from "react";
import ForecastIcon from "./ForecastIcon";
import "./Forecast.css";

export default function ForecastDay(props) {
	let maxtemp = Math.round(props.data.temp.max);
	let mintemp = Math.round(props.data.temp.min);

	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();

		let forecastdow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return forecastdow[day];
	}

	return (
		<div className="ForecastDay">
			<br />
			<div className="forecastdow">{day()}</div>
			<div className="forecasticon">
				<ForecastIcon code={props.data.weather[0].icon} />
			</div>{" "}
			<div className="forecastTemp">
				<span className="maxtemp">{maxtemp}°C</span> | <span>{mintemp}°C </span>
			</div>
		</div>
	);
}

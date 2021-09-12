import React from "react";

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
			<div>{day()}</div>
			<div class="clearfix">
				<img src={props.data.weather[0].icon} alt="i tried" />
			</div>{" "}
			<div>
				<span>{maxtemp}°C</span> {""}
				<span>{mintemp}°C </span>
			</div>
		</div>
	);
}

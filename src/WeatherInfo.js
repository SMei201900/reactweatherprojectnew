import React from "react";
import DayofWeek from "./DayofWeek";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h2 className="text-capitalize"> {props.data.city} </h2>
			<div className="row">
				<div className="col-4">
					<DayofWeek date={props.data.date} />{" "}
				</div>
				<div className="col-4">
					<div className="text-capitalize"> {props.data.description} </div>
					<div class="clearfix">
						{" "}
						<img src={props.data.icon} alt={props.data.description} />{" "}
					</div>
					<Temperature celsius={props.data.temperature} />
				</div>
				<div className="col-4">
					<li>Humidity: {props.data.humidity}%</li>
					<li>Wind Speed: {props.data.windSpeed}km/h</li>
				</div>
			</div>
		</div>
	);
}

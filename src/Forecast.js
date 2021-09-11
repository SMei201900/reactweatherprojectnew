import React from "react";

export default function Forecast(props) {
	return (
		<div className="Forecast">
			<div className="row">
				<div className="col-2">
					<div>Monday</div>
					<div class="clearfix">
						{" "}
						<img src={props.data} />{" "}
					</div>{" "}
					<div>
						<span>MAX°</span>
						<span>MIN°C</span>
					</div>
				</div>
				<div className="col-2">
					<div>Tuesday</div>
					<p>"image also"</p>
					<div>
						<span>MAX°</span>
						<span>MIN°C</span>
					</div>
				</div>
					<div>Wednesday</div>
					<p>third image</p>
					<div>
						<span>MAX°</span>
						<span>MIN°C</span>
					</div>
				</div>
			</div>
		</div>
	);
}

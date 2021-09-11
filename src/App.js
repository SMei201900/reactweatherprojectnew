import "./App.css";
import Search from "./Search.js";
import Credits from "./Credits";

export default function App() {
	return (
		<div className="App">
			<div className="gradient">
				<h1>Weather App</h1>
				<br />
				<Search />
				<br />
				<Credits />
			</div>
		</div>
	);
}

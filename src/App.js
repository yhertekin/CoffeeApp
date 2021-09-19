import React, { useState } from "react";
import CoffeeList from "./components/Coffees/CoffeeList";
import ControlPanel from "./components/ControlSection/ControlPanel";
import db from "./db/coffees.json";

function App() {
	const [coffeeData, setCoffeeData] = useState(db);

	const buttonHandler = (event) => {
		const category = event.target.id;
		if (category !== "all") {
			setCoffeeData(db.filter((item) => item.category === category));
		} else {
			setCoffeeData(db);
		}
	};
	const inputHandler = (event) => {};

	return (
		<div className="App">
			<ControlPanel buttonHandler={buttonHandler} inputHandler={inputHandler} />
			<CoffeeList coffees={coffeeData} />
		</div>
	);
}

export default App;

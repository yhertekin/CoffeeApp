import React from "react";
import CoffeeList from "./components/Coffees/CoffeeList";
import db from "./db/coffees.json";

function App() {
	return (
		<div className="App">
			<CoffeeList coffees={db} />
		</div>
	);
}

export default App;

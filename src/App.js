import React, { useState } from "react";
import CoffeeList from "./components/Coffees/CoffeeList";
import ControlPanel from "./components/ControlSection/ControlPanel";
import db from "./db/coffees.json";
import styles from "./App.module.css";

function App() {
	const [dbData, setDbData] = useState(db);
	const [coffeeData, setCoffeeData] = useState(db);
	const [category, setCategory] = useState("all");

	const buttonHandler = (event) => {
		const buttonCategory = event.target.id;
		setDbData(
			buttonCategory === "all"
				? coffeeData
				: coffeeData.filter((item) => item.category === buttonCategory)
		);
		setCategory(buttonCategory);
	};

	const inputHandler = (inputValue) => {
		inputValue = inputValue.toLowerCase();
		let data = coffeeData.filter(
			(item) => item.title.toLowerCase().search(inputValue) !== -1
		);
		if (category !== "all") {
			data = data.filter((item) => item.category === category);
		}
		setDbData(data);
	};

	return (
		<div className={styles.app}>
			<ControlPanel
				buttonHandler={buttonHandler}
				inputHandler={(inputValue) => inputHandler(inputValue)}
			/>
			<CoffeeList coffees={dbData} />
		</div>
	);
}

export default App;

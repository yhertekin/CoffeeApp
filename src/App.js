import React, { useState } from "react";
import CoffeeList from "./components/Coffees/CoffeeList";
import ControlPanel from "./components/ControlSection/ControlPanel";
import db from "./db/coffees.json";
import styles from "./App.module.css";
import CoffeeProvider from "./context/CoffeeContext";

function App() {
	return (
		<div className={styles.app}>
			<CoffeeProvider>
				<ControlPanel />
				<CoffeeList />
			</CoffeeProvider>
		</div>
	);
}

export default App;

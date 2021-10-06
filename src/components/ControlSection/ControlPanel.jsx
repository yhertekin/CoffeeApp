import React from "react";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import styles from "./ControlPanel.module.css";
import { useCoffee } from "../../context/CoffeeContext";

const ControlPanel = () => {
	const { inputHandler, buttonHandler } = useCoffee();

	return (
		<div className={styles.panel}>
			<FilterInput
				id="input_filter"
				searchCoffee={(inputValue) => inputHandler(inputValue)}
			/>
			<FilterButton id="all" name="All Coffees" buttonHandler={buttonHandler} />
			<FilterButton id="hot" name="Hot" buttonHandler={buttonHandler} />
			<FilterButton id="iced" name="Iced" buttonHandler={buttonHandler} />
		</div>
	);
};

export default ControlPanel;

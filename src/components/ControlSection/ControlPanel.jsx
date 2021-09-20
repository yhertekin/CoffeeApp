import React from "react";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import styles from "./ControlPanel.module.css";

const ControlPanel = (props) => {
	return (
		<div className={styles.panel}>
			<FilterInput
				id="input_filter"
				searchCoffee={(inputValue) => props.inputHandler(inputValue)}
			/>
			<FilterButton
				id="all"
				name="All Coffees"
				buttonHandler={props.buttonHandler}
			/>
			<FilterButton id="hot" name="Hot" buttonHandler={props.buttonHandler} />
			<FilterButton id="iced" name="Iced" buttonHandler={props.buttonHandler} />
		</div>
	);
};

export default ControlPanel;

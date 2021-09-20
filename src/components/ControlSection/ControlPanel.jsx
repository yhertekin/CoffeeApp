import React from "react";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";

const ControlPanel = (props) => {
	return (
		<React.Fragment>
			<FilterInput
				id="input_filter"
				searchCoffee={(inputValue) => props.inputHandler(inputValue)}
			/>
			<FilterButton
				id="all"
				name="All Coffees"
				buttonHandler={props.buttonHandler}
			/>
			<FilterButton
				id="hot"
				name="Hot Coffees"
				buttonHandler={props.buttonHandler}
			/>
			<FilterButton
				id="iced"
				name="Iced Coffees"
				buttonHandler={props.buttonHandler}
			/>
		</React.Fragment>
	);
};

export default ControlPanel;

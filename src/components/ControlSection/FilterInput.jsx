import React, { useState } from "react";

const FilterInput = (props) => {
	const [inputValue, setInputValue] = useState("");

	const onChangeHandler = (event) => {
		setInputValue(event.target.value);
		props.searchCoffee();
	};

	return <input type="text" value={inputValue} onChange={onChangeHandler} />;
};

export default FilterInput;

import React, { useEffect, useState } from "react";
import styles from "./FilterInput.module.css";

const FilterInput = (props) => {
	const [inputValue, setInputValue] = useState("");

	const onChangeHandler = (event) => {
		setInputValue(event.target.value);
	};

	useEffect(() => {
		props.searchCoffee(inputValue);
	}, [inputValue]);

	return (
		<input
			type="text"
			placeholder="Search"
			value={inputValue}
			onChange={(e) => onChangeHandler(e)}
			className={styles.input}
		/>
	);
};

export default FilterInput;

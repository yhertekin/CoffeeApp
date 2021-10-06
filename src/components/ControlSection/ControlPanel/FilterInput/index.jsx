import React, { useState, useEffect } from "react";
import styles from "./FilterInput.module.css";
import { useCoffee } from "../../../../context/CoffeeContext";

const FilterInput = () => {
	const [inputValue, setInputValue] = useState("");
	const { inputHandler } = useCoffee();

	useEffect(() => {
		inputHandler(inputValue);
	}, [inputValue]);

	return (
		<input
			type="text"
			placeholder="Search"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
			className={styles.input}
		/>
	);
};

export default FilterInput;

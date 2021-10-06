import React from "react";
import styles from "./FilterButton.module.css";
import { useCoffee } from "../../../../context/CoffeeContext";

const FilterButton = (props) => {
	const { buttonHandler } = useCoffee();
	return (
		<button className={styles.button} id={props.id} onClick={buttonHandler}>
			{props.name}
		</button>
	);
};

export default FilterButton;

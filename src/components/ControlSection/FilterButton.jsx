import React from "react";
import styles from "./FilterButton.module.css";

const FilterButton = (props) => {
	return (
		<button
			className={styles.button}
			id={props.id}
			onClick={props.buttonHandler}
		>
			{props.name}
		</button>
	);
};

export default FilterButton;

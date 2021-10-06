import React from "react";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import styles from "./ControlPanel.module.css";

const ControlPanel = () => {
	return (
		<div className={styles.panel}>
			<FilterInput id="input_filter" />
			<FilterButton id="all" name="All Coffees" />
			<FilterButton id="hot" name="Hot" />
			<FilterButton id="iced" name="Iced" />
		</div>
	);
};

export default ControlPanel;

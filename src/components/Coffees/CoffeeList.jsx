import React from "react";
import CoffeeItem from "./CoffeeItem";
import styles from "./CoffeeList.module.css";

const CoffeeList = ({ coffees }) => {
	return (
		<ul className={styles.list}>
			{coffees.map((coffee) => (
				<CoffeeItem
					title={coffee.title}
					description={coffee.description}
					ingredients={coffee.ingredients}
				/>
			))}
		</ul>
	);
};

export default CoffeeList;

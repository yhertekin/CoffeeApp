import React from "react";
import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({ coffees }) => {
	return (
		<ul>
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

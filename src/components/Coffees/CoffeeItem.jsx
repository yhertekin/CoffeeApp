import React from "react";

const CoffeeItem = (props) => {
	return (
		<li>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<div>Ingredients: {props.ingredients.join(", ")}</div>
		</li>
	);
};

export default CoffeeItem;

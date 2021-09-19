import React from "react";

const CoffeeItem = (props) => {
	return (
		<li>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			<div>Ingredients: {props.ingredients.join(", ")}</div>
		</li>
	);
};

export default CoffeeItem;

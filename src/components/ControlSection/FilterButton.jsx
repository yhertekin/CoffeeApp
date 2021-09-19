import React from "react";

const FilterButton = (props) => {
	return (
		<button id={props.id} onClick={props.buttonHandler}>
			{props.name}
		</button>
	);
};

export default FilterButton;

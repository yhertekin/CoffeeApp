import React from "react";

const Button = (props) => {
	return <button id={props.id}>{props.children}</button>;
};

export default Button;

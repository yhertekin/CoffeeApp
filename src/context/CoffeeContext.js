import { createContext, useContext, useState } from "react";
import coffeeData from "../db/coffees.json";

const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
	const [coffees, setCoffees] = useState(coffeeData);
	const [category, setCategory] = useState("all");

	const buttonHandler = (event) => {
		const buttonCategory = event.target.id;

		setCoffees(
			buttonCategory === "all"
				? coffeeData
				: coffeeData.filter((item) => item.category === buttonCategory)
		);
		setCategory(buttonCategory);
	};

	const inputHandler = (inputValue) => {
		inputValue = inputValue.toLowerCase();
		const data = coffeeData.filter(
			(item) =>
				item.title.toLowerCase().search(inputValue) !== -1 &&
				(category !== "all" ? item.category === category : item)
		);
		setCoffees(data);
	};

	const values = { coffees, setCoffees, inputHandler, buttonHandler };

	return (
		<CoffeeContext.Provider value={values}>{children}</CoffeeContext.Provider>
	);
};

export const useCoffee = () => useContext(CoffeeContext);
export default CoffeeProvider;

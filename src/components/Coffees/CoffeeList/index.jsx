import { useCoffee } from "../../../context/CoffeeContext";
import CoffeeItem from "./CoffeeItem";
import styles from "./CoffeeList.module.css";

const CoffeeList = () => {
	const { coffees } = useCoffee();
	return (
		<ul className={styles.list}>
			{coffees.map((coffee, index) => (
				<CoffeeItem
					key={index}
					title={coffee.title}
					description={coffee.description}
					ingredients={coffee.ingredients}
				/>
			))}
		</ul>
	);
};

export default CoffeeList;

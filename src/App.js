import CoffeeList from "./components/CoffeeList";
import ControlPanel from "./components/ControlPanel";
import styles from "./App.module.css";
import CoffeeProvider from "./context/CoffeeContext";

function App() {
	return (
		<div className={styles.app}>
			<CoffeeProvider>
				<ControlPanel />
				<CoffeeList />
			</CoffeeProvider>
		</div>
	);
}

export default App;

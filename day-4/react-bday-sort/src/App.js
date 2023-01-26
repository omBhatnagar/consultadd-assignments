import { useState } from "react";
import "./App.css";
import PeopleTable from "./components/peopletable";
import Radio from "./components/radio";

function App() {
	const [sorting, setSorting] = useState("");

	return (
		<div className='App'>
			<Radio setSorting={setSorting} />
			<PeopleTable sorting={sorting} />
		</div>
	);
}

export default App;

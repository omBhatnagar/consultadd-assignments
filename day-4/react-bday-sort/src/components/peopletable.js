import { useEffect, useState } from "react";
import filterData from "../utils/filterData";

const PeopleTable = ({ sorting }) => {
	const [peopleData, setPeopleData] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch("./data.json", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			const data = await res.json();
			setPeopleData(filterData(data, sorting));
		})();
	}, [sorting]);

	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Date of Birth</th>
			</tr>
			{peopleData?.map((person) => (
				<tr>
					<td>{person.name}</td>
					<td>{person.dob}</td>
				</tr>
			))}
		</table>
	);
};

export default PeopleTable;

import formatDate from "./formatDate";

const filterData = (data, sorting) => {
	switch (sorting) {
		case "name":
			return data.sort((a, b) =>
				a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
			);
		case "age":
			return data.sort((a, b) => {
				let dateA = formatDate(a.dob);
				let dateB = formatDate(b.dob);
				if (dateB < dateA) {
					return 1;
				} else {
					return -1;
				}
			});
		default:
			return data;
	}
};
export default filterData;

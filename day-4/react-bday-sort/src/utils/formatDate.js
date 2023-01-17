const formatDate = (dateString) => {
	var dateParts = dateString.split("/");

	var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

	return dateObject;
};

export default formatDate;

const Radio = ({ setSorting }) => {
	const handleChange = (e) => {
		setSorting(e.target.value);
	};
	return (
		<div onChange={handleChange}>
			<input type='radio' name='sorting' value='name' />
			Name
			<input type='radio' name='sorting' value='age' />
			Age
		</div>
	);
};

export default Radio;

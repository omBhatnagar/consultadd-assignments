import { useState } from "react";
import { Select, Input, Button } from "@mantine/core";
import "./currencyexchage.css";
import convertCurrency from "../utils/convertcurrency";

const CurrencyExchange = () => {
	const [userCurrency, setUserCurrency] = useState("");
	const [targetCurrency, setTargetCurrency] = useState("");
	const [amount, setAmount] = useState(0);
	const [currencies, setCurrencies] = useState([
		"USD",
		"INR",
		"EUR",
		"JPY",
		"GBP",
	]);
	const [targetCurrencies, setTargetCurrencies] = useState([
		"USD",
		"INR",
		"EUR",
		"JPY",
		"GBP",
	]);

	const handleUserCurrencyChange = (e) => {
		setUserCurrency(e);
		setTargetCurrencies(currencies.filter((currency) => currency !== e));
	};
	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};
	const handleTargetCurrencyChange = (e) => {
		setTargetCurrency(e);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setAmount(convertCurrency(amount, userCurrency, targetCurrency));
		console.log({
			userCurrency,
			targetCurrency,
		});
	};

	return (
		<div className='wrapper'>
			<h1 className='title'>Convert Currency</h1>
			<div className='form-wrapper'>
				<form className='form' onSubmit={handleSubmit}>
					<Select
						value={userCurrency}
						onChange={handleUserCurrencyChange}
						data={currencies}
						placeholder='Start currency'
					/>
					<Input
						type='number'
						value={amount}
						onChange={handleAmountChange}
						placeholder='Amount'
					/>
					<Select
						value={targetCurrency}
						onChange={handleTargetCurrencyChange}
						data={targetCurrencies}
						placeholder='Target currency'
					/>

					<Button
						variant='gradient'
						gradient={{ from: "indigo", to: "cyan" }}
						onClick={handleSubmit}
					>
						Convert
					</Button>
				</form>
			</div>
		</div>
	);
};

export default CurrencyExchange;

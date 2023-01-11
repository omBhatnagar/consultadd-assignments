let labelData = [1, 2, 3, 6, 9, 8, 7, 4, 5];

const rotateButton = document.querySelector(".rotationButton");
console.log(rotateButton);

function rotate() {
	let button1 = document.getElementById("1");
	let button2 = document.getElementById("2");
	let button3 = document.getElementById("3");
	let button4 = document.getElementById("4");
	let button5 = document.getElementById("5");
	let button6 = document.getElementById("6");
	let button7 = document.getElementById("7");
	let button8 = document.getElementById("8");
	let button9 = document.getElementById("9");

	let changedValue = labelData.splice(labelData.length - 2, 1);

	labelData.unshift(changedValue[0]);

	button1.innerHTML = labelData[0];
	button2.innerHTML = labelData[1];
	button3.innerHTML = labelData[2];
	button4.innerHTML = labelData[7];
	button5.innerHTML = labelData[8];
	button6.innerHTML = labelData[3];
	button7.innerHTML = labelData[6];
	button8.innerHTML = labelData[5];
	button9.innerHTML = labelData[4];

	return labelData;
}

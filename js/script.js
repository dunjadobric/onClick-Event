function changeColor() {
	document.getElementById("changeColor").style.color = randomColor();	
}

//The map() method creates a new array 
//flled with the results of calling 
//a provided function on every element in the calling array.

// function randomColor() {
// 	let num1 = Math.floor(Math.random() * 256);
// 	let num2 = Math.floor(Math.random() * 256);
// 	let num3 = Math.floor(Math.random() * 256);
// 	return "rgb(" + num1 + "," + num2 + "," + num3 + ")";
// }

function randomColor() {
	return `rgb(${[1,2,3].map(x => Math.floor(Math.random() * 256))})`;
}

changeColor();

document.getElementById("buttonShow").addEventListener('click', buttonShowFunction);

function buttonShowFunction() {
	document.getElementById("text").style.display = "block";
}

document.getElementById("buttonHide").addEventListener('click', buttonHideFunction);

function buttonHideFunction() {
	document.getElementById("text").style.display = "none";
}


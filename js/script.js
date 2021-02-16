function changeColor() {
	document.getElementById("changeColor").style.color = randomColor();	
}

function randomColor() {
	let num1 = Math.floor(Math.random() * 256);
	let num2 = Math.floor(Math.random() * 256);
	let num3 = Math.floor(Math.random() * 256);
	return "rgb(" + num1 + "," + num2 + "," + num3 + ")";
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


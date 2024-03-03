let lightMode = localStorage.getItem("lightMode");
let darkMode = localStorage.getItem("darkMode");

const enableLightMode = () => {
	document.body.classList.add('lightmode');
	localStorage.setItem('lightMode', 'enabled');
	document.body.classList.remove('darkmode');
	localStorage.setItem("darkMode", null);
}

const disableLightMode = () => {
	document.body.classList.remove('lightmode');
	localStorage.setItem("lightMode", null);
	document.body.classList.add('darkmode');
	localStorage.setItem("darkMode", 'enabled');
}

function changeTheme(event) {
	const button = event.target;
	lightMode = localStorage.getItem("lightMode");
	darkMode = localStorage.getItem("darkMode");
	const myImg = document.getElementById("myButton");
	if (lightMode == "enabled") {
		myImg.src = "images/sun.png";
		disableLightMode();
		document.body.style.backgroundColor = "#ecf2fe";
    document.body.style.h1 = "#232D3F";

	} else {
		myImg.src = "images/moon.png";
		enableLightMode();
		document.body.style.backgroundColor = "#232D3F";
    document.body.style.h1 = "#232D3F";

	}
}
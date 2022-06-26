function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {	// Altera a clase para Dark Mode
	button.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);

}

function changeText() {  //Altera texto do botão
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];


button.addEventListener('click', changeMode);

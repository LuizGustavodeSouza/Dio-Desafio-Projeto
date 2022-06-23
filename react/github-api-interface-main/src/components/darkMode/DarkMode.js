//import React from 'react'




function DarkMode() {
/*
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
			h1.innerHTML = darkMode + ' ON';
			return;
		}
	
		button.innerHTML = darkMode;
		h1.innerHTML = lightMode + ' ON';
	}
	
	const darkModeClass = 'dark-mode';
	const button = document.getElementById('mode-selector');
	const body = document.getElementsByTagName('body')[0];
	
	
	button.addEventListener('click', changeMode);
	
	*/
  return (
	<>
		<button type="submit" onClick={DarkMode}>
          <span>Dark Mode</span>
        </button>
	</>
  );
}

export default DarkMode



/*
function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {	// Altera a clase para Dark Mode
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {  //Altera texto do botão
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
*/
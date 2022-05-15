const toggleDarkmodeButton = document.querySelector('#toggle-darkmode-button')

const setTheme = theme => {
	localStorage.theme = theme
	if(theme === 'dark'){
		document.documentElement.classList.add('dark')
		toggleDarkmodeButton.classList.remove('bx-sun');
		toggleDarkmodeButton.classList.add('bx-moon');
	}else{
		document.documentElement.classList.remove('dark')
		toggleDarkmodeButton.classList.add('bx-sun');
		toggleDarkmodeButton.classList.remove('bx-moon');
	}
}

toggleDarkmodeButton.addEventListener('click', () => 
	localStorage.theme === 'dark'
		? setTheme('light')
		: setTheme('dark')
)

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', element => 
	setTheme(
		element.matches 
			? 'dark' 
			: 'light'
	)
)

localStorage.theme == undefined 
	? window.matchMedia('(prefers-color-scheme: dark)').matches
		? setTheme('dark')
		: setTheme('light')
	: localStorage.theme === 'dark'
		? setTheme('dark')
		: setTheme('light')
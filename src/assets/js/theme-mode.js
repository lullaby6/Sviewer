themeModeButton = document.querySelector(".button-theme")

function changeTheme(n){
	theme = n;
	document.documentElement.setAttribute("data-theme", n);
	localStorage.setItem('theme', n);
	if(n == 'dark'){
		themeModeButton.classList.remove('bx-sun');
		themeModeButton.classList.add('bx-moon');
	}else{
		themeModeButton.classList.add('bx-sun');
		themeModeButton.classList.remove('bx-moon');
	}
}

function toggleTheme(){
	if (theme == 'dark'){
		changeTheme('light');
	}else{
		changeTheme('dark');
	}
}

if(localStorage.getItem("theme") == "dark" || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
	changeTheme('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
	changeTheme(newColorScheme);
});

themeModeButton.addEventListener("click", (event) => {
	toggleTheme();
});

if (theme == "dark") {
	changeTheme('dark');
}else{
	changeTheme('light');
}
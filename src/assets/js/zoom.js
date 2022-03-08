document.querySelector(".bx-plus").addEventListener("click", (event) => {
	zoom += 0.125;
	img.style.transform = 'scale(' + zoom + ') rotate(' + rotation + 'deg)';
});

document.querySelector(".bx-minus").addEventListener("click", (event) => {
	if (zoom >= 0.25){
		zoom -= 0.125;
	}
	img.style.transform = 'scale(' + zoom + ') rotate(' + rotation + 'deg)';
});

document.addEventListener("wheel", (event) => {
	if (event.deltaY < 0){
	    zoom += 0.125;
	}else if (event.deltaY > 0 && zoom >= 0.25){
	    zoom -= 0.125;
	}
	img.style.transform = 'scale(' + zoom + ') rotate(' + rotation + 'deg)';
});
document.querySelector(".bx-rotate-left").addEventListener("click", (event) => {
	rotation -= 90;
	img.style.transform = 'scale(' + zoom + ') rotate(' + rotation + 'deg)';
});

document.querySelector(".bx-rotate-right").addEventListener("click", (event) => {
	rotation += 90;
	img.style.transform = 'scale(' + zoom + ') rotate(' + rotation + 'deg)';
});
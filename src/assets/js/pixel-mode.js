pixelModeButton = document.querySelector(".button-pixel-mode")

pixelModeButton.addEventListener("click", (event) => {
	img.classList.toggle('pixel-art');
	pixelModeButton.classList.toggle('bx-cube');
	pixelModeButton.classList.toggle('bxs-cube');
});
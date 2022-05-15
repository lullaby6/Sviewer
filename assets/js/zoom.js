document.querySelector(".bx-plus").addEventListener("click", () => {

	zoom += zoom/3
	img.style.transform = `scale(${zoom}) rotate(${rotation}deg)`

})

document.querySelector(".bx-minus").addEventListener("click", () => {

	if (zoom >= 0.25) zoom -= zoom/3
	img.style.transform = `scale(${zoom}) rotate(${rotation}deg)`

})

document.addEventListener("wheel", event => {

	if (event.deltaY < 0){
	    zoom += zoom/3
	}else if (event.deltaY > 0 && zoom >= 0.25){
	    zoom -= zoom/3
	}

	img.style.transform = `scale(${zoom}) rotate(${rotation}deg)`
	
})
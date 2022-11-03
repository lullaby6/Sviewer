const upload = document.getElementById("upload")
const img = document.getElementById("img")
const imgName = document.getElementById("img-name")
const imgDiv = document.getElementById("img-div")

let rotation = 0
let zoom = 1
let pos = 0

function reset() {
	rotation = 0
	zoom = 1
	img.style.transform = `scale(${zoom}) rotate(${rotation}deg)`
	imgDiv.style.transform = 'translate(-50%, -50%)'
	imgDiv.style.left = '50%'
	imgDiv.style.top = '50%'
}


const loadImage = file => {
	const reader = new FileReader()

	reader.addEventListener('load', event => {
		img.src = event.target.result
		document.title = 'Sviewer - ' + upload.files[pos].name
		imgName.style.display = 'block'
		imgName.innerHTML = upload.files[pos].name
		reset()
	})

    reader.readAsDataURL(file);
}


upload.addEventListener("change", event => {
	pos = 0
	loadImage(event.target.files[pos])
})

document.querySelector(".bx-reset").addEventListener("click", () => reset())

document.querySelector(".bx-chevron-left").addEventListener("click", () => {
	pos > 0
		? pos -= 1
		: pos = upload.files.length-1

	loadImage(upload.files[pos])
})

document.querySelector(".bx-chevron-right").addEventListener("click", () => {
	pos < upload.files.length-1
		? pos += 1
		: pos = 0

	loadImage(upload.files[pos])
})
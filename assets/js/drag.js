const dragElement = element => {
	const closeDragElement = () => {
		document.onmouseup = null
		document.onmousemove = null

		document.ontouchend = null
		document.ontouchmove = null
	}

	const dragMouseDown = event => {
		element.style.position = 'absolute'
		event = event || window.event
		event.preventDefault()
		pos3 = event.clientX
		pos4 = event.clientY

		document.onmouseup = closeDragElement
		document.onmousemove = elementDrag
	}

	const elementDrag = event => {
		event = event || window.event
		event.preventDefault()
		pos1 = pos3 - event.clientX
		pos2 = pos4 - event.clientY
		pos3 = event.clientX
		pos4 = event.clientY
		element.style.top = (element.offsetTop - pos2) + "px"
		element.style.left = (element.offsetLeft - pos1) + "px"
	}

	const dragTouchDown = event => {
		element.style.position = 'absolute'
		event = event || window.event
		pos3 = event.touches[0].clientX
		pos4 = event.touches[0].clientY

		document.ontouchend = closeDragElement
		document.ontouchmove = elementTouchDrag
	}

	const elementTouchDrag = event => {
		event = event || window.event
		pos1 = pos3 - event.touches[0].clientX
		pos2 = pos4 - event.touches[0].clientY
		pos3 = event.touches[0].clientX
		pos4 = event.touches[0].clientY
		element.style.top = (element.offsetTop - pos2) + "px"
		element.style.left = (element.offsetLeft - pos1) + "px"
	}

	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
	element.onmousedown = dragMouseDown
	element.ontouchstart = dragTouchDown
}

dragElement(imgDiv)
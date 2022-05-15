fullScreenButton = document.querySelector(".button-fullscreen")

let documentE = document.documentElement

fullScreenButton.addEventListener("click", () => {

	if(window.innerHeight == screen.height) {

		if(document.exitFullscreen){
			document.exitFullscreen()
		}else if(document.webkitExitFullscreen){ /* Safari */
			document.webkitExitFullscreen()
		}else if(document.msExitFullscreen){ /* IE11 */
			document.msExitFullscreen()
		}
		
	}else{

		if(documentE.requestFullscreen){
			documentE.requestFullscreen()
		}else if(documentE.webkitRequestFullscreen){ /* Safari */
			documentE.webkitRequestFullscreen()
		}else if(documentE.msRequestFullscreen){ /* IE11 */
			documentE.msRequestFullscreen()
		}

	}

})

documentE.addEventListener("fullscreenchange", () => {

	if(window.innerHeight == screen.height) {

		fullScreenButton.classList.add('bx-exit-fullscreen')
		fullScreenButton.classList.remove('bx-fullscreen')

	}else{

		fullScreenButton.classList.add('bx-fullscreen')
		fullScreenButton.classList.remove('bx-ext-fullscreen')

	}

})
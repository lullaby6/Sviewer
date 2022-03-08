const main = document.getElementById("main");

main.addEventListener("drop", (event) => {
	event.preventDefault();

	if(event.dataTransfer.items){
		for(let i = 0; i < event.dataTransfer.items.length; i++){
			if (event.dataTransfer.items[i].kind === 'file') {
				upload.files = event.dataTransfer.files;
				pos = 0;
				loadImage(event.dataTransfer.items[pos].getAsFile());
			}
		}
	}else{
		for(let i = 0; i < event.dataTransfer.files.length; i++){
			loadImage(file);
		}
	}

	if(event.dataTransfer.items){
		event.dataTransfer.items.clear();
	}else{
		event.dataTransfer.clearData();
	}
});


main.addEventListener("dragover", (event) => {
	event.preventDefault();
});

main.addEventListener("dragenter", (event) => {
	event.preventDefault();
});
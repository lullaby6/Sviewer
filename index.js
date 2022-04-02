const {app, BrowserWindow} = require('electron');
const path = require('path');

app.on('ready', () => {
	const mainWindow = new BrowserWindow({
		autoHideMenuBar: true,
		icon: path.join(__dirname, 'src/assets/favicon.ico')
	});
	mainWindow.maximize();
	mainWindow.loadFile(path.join(__dirname, "src/index.html"));
});
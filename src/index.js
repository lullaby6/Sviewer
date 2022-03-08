const {app, BrowserWindow} = require('electron');

const url = require('url');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
	require('electron-reload')(__dirname, {
		
	});
}

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		autoHideMenuBar: true,
		icon: path.join(__dirname, 'assets/favicon.ico')
	});
	mainWindow.maximize();
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));
});
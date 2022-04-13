const { app, BrowserWindow } = require('electron');
const path = require('path');
const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 960,
        height: 540,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, 'splash.html'));
}
app.on('ready', loadMainWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});
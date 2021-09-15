const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (isDev) {
    // Development URL
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile('src/build/index.html');
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

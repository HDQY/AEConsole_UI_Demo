import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 550,
    width: 912,
    resizable: true,
    frame: false,
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null; 
    if (pid_GatewayService != null)
    {
      process.kill(pid_GatewayService,'SIGKILL');
    }
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

import { ipcMain } from 'electron'
ipcMain.on('min', e=> mainWindow.minimize());
ipcMain.on('max', e=> {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize()
    } else {
        mainWindow.maximize()
    }
});
ipcMain.on('close', (event, arg)=> {
  console.log(arg);
  if (arg == "PllManualSelectWindow")
  {
    manualSelectWindow.close();
  }
  else 
  {
    mainWindow.close();
  }
});

/** set id of AEConsole-GatewayService */
var pid_GatewayService = 0;
ipcMain.on('setpid_GatewayService', (e,data)=> {
  pid_GatewayService = data;
});

/** Pll manual select Window */
let manualSelectWindow;
ipcMain.on("show-manual-select-window", (event, arg) => {
  manualSelectWindow = new BrowserWindow({
    height: 600,
    width: 995,
    //resizable: false,
    resizable: true,
    frame: false,
    parent: mainWindow
  });

  manualSelectWindow.loadURL(winURL + "#/PllManualSelect");
  manualSelectWindow.on("closed", () => {
    manualSelectWindow = null;
  });
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

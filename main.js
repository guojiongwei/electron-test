const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
var mainWindow = null
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true; //取消控制台警告

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width:800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('./render/index.html')
  app.on('closed', () => {
    mainWindow = null
  })
})

app.allowRendererProcessReuse = true // 取消命令行警告
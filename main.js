const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  // set window properties (width, height)
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })


  // load the browser window
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  // recheck window when active but have no window 
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
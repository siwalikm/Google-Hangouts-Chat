import { Menu, app, shell, BrowserWindow, dialog } from 'electron';
const defaultMenu = require('electron-default-menu');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

app.on('ready', () => {

  // Get template for default menu
  const menu = defaultMenu(app, shell);

  // Add custom menu
  menu.splice(4, 0, {
    label: 'Custom',
    submenu: [
      {
        label: 'Do something',
        click: (item, focusedWindow) => {
          dialog.showMessageBox({message: 'Do something', buttons: ['OK'] })
        }
      }
    ]
  })

  // Set top-level application menu, using modified template
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
})


const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    minWidth: 1024,
    minHeight: 600,
    resizable: true,
    fullscreen: true,
  });

  // and load the index.html of the app.
  mainWindow.loadURL('https://chat.google.com');
  // mainWindow.loadURL(`file://${__dirname}/index.html`);

  // handling url on-clicks to open in default browser
  var handleRedirect = (e, url) => {
    if (url != mainWindow.webContents.getURL()) {
      e.preventDefault()
      require('electron').shell.openExternal(url)
    }
  };

  mainWindow.webContents.on('will-navigate', handleRedirect);
  mainWindow.webContents.on('new-window', handleRedirect);

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

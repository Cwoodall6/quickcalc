var menubar = require('menubar')
var ipc = require('electron').ipcMain
var globalShortcut = require('electron').globalShortcut
var mb = menubar({ dir: __dirname + '/app', width: 520, height: 100, icon: __dirname + '/app/Icon-Template.png', preloadWindow: true, windowPosition: 'trayCenter' })
var Menu = require('electron').Menu

mb.on('show', function () {
  mb.window.webContents.send('show')
})

mb.app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

mb.app.on('activate', function () {
  mb.showWindow()
})

// when receive the abort message, close the app
ipc.on('abort', function () {
  mb.hideWindow()
})

// when receive the abort message, close the app
ipc.on('update-preference', function (evt, pref, initialization) {
  registerShortcut(pref['open-window-shortcut'], initialization)
})

var template = [
  {
    label: 'quickcalc',
    submenu: [
      {
        label: 'Quit App',
        accelerator: 'Command+Q',
        selector: 'terminate:'
    }, {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: function () { mb.window.toggleDevTools() }
      }
    ]
  }
]

mb.on('ready', function ready () {
  // Build default menu for text editing and devtools. (gone since electron 0.25.2)
  var menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

// Register a shortcut listener.
var registerShortcut = function (keybinding, initialization) {
  globalShortcut.unregisterAll()

  try {
    var ret = globalShortcut.register(keybinding, function () {
      mb.window.isVisible() ? mb.hideWindow() : mb.showWindow()
    })
  } catch (err) {
    mb.window.webContents.send('preference-updated', false, initialization)
  }

  if (ret) {
    mb.window.webContents.send('preference-updated', true, initialization)
  }
}

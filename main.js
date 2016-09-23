const menubar = require('menubar')
const fs = require('fs')
const path = require('path')
const Menu = require('electron').Menu

let win
var mb = menubar({
    dir: __dirname + '/app',
    width: 325,
    height: 315,
    icon: __dirname + '/app/Icon-Template.png',
    preloadWindow: true,
    windowPosition: 'trayCenter'
})
var template = [
  {
    label: 'Mojibar',
    submenu: [
      {
        label: 'Quit App',
        accelerator: 'Command+Q',
        selector: 'terminate:'
      }
    ]
  }
]

mb.on('ready', function () {
  mb.window.webContents.send('show')
  var menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

var registerShortcut = function (keybinding, initialization) {
  globalShortcut.unregisterAll()
}
mb.app.on('will-quit', function () {

})

mb.app.on('activate', function () {
  mb.showWindow()
})

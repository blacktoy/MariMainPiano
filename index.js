var self = require('sdk/self');
var buttons = require('sdk/ui/button/action');

var panel = require("sdk/panel").Panel({
    width: 700,
    height: 280,
    contentURL: self.data.url("iframe_marimainpiano.html"),
});

var button = buttons.ActionButton({
  id: "open-panel",
  label: "MariMainPiano",
  icon: {
    "16": "./piano-icon16.png",
    "24": "./piano-icon24.png",
    "32": "./piano-icon32.png",
    "48": "./piano-icon48.png",
    "64": "./piano-icon64.png"
  },
  onClick: handleClick
});

function handleClick(state){
  panel.show();
}
var tabs = require("sdk/tabs");
panel.on('show', function(){
  panel.port.on('openHelpTab', function(Help){
    tabs.open("help.html");
  })
});


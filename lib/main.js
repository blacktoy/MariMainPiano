var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "MariMainPiano",
  label: "Open in New Tab",
  icon: {
    "16": "./piano-icon16.png",
    "24": "./piano-icon24.png",
    "32": "./piano-icon32.png",
    "64": "./piano-icon64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("MariMainPiano.html");
}
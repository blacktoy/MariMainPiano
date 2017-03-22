var self = require('sdk/self');
var panels = require('sdk/panel');
var {ToggleButton} = require('sdk/ui/button/toggle');

var buttons = ToggleButton({
  id: "open-panel",
  label: "MariMainPiano",
  icon: {
    "16": "./piano16.png",
    "24": "./piano24.png",
    "32": "./piano32.png",
    "48": "./piano48.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  contentStyle: "body{background: #F8F8F8;}", 
  width: 110,
  height: 74,
  onHide: handleHide
});

function handleChange(state){
  if(state.checked){
    panel.show({
      position: buttons
    });
  }
}

function handleHide(){
  buttons.state('window', {checked: false});
}

var tabs = require("sdk/tabs");

panel.once('show', function(){
  panel.port.on("newWindow", function(){
    var Window = require('sdk/window/utils');
    Window.open("chrome://marimainpiano/content/MariMainPiano.xul", {
    features: {
      width: 700,
      height: 260,
      chrome: true,
      centerscreen: true,
      includePrivate: true
      }
    });
  });
  var amounttab = 0;
  panel.port.on("helpTab", function(){
    tabs.open({
      url:"help.html",
      onOpen: function(tab){
        //prevent for opening more than 2 tab. Can't solve a better way
        amounttab += 1;
        if(amounttab > 1){
          tab.on('deactivate', function(){tab.close();});
        }
      }
    });
  });
});
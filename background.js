let active_tab_id = 0;

var isExtensionOn = true;

start();

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.cmd === "setOnOffState") {
      isExtensionOn = request.data.value;
      if (isExtensionOn) {
        start();
      }
    }

    if (request.cmd === "getOnOffState") {
      sendResponse(isExtensionOn);
    }
  });

function start() {
  chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
      active_tab_id = tab.tabId;
      //chrome.tabs.insertCSS(null, { file: './mystyles.css' });
      chrome.tabs.executeScript(null, { file: './foreground.js' })
    });
  });
}
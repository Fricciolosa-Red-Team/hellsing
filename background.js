let active_tab_id = 0;

chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    active_tab_id = tab.tabId;
    chrome.tabs.insertCSS(null, { file: './mystyles.css' });
    chrome.tabs.executeScript(null, { file: './foreground.js' })
  });
});
chrome.tabs.onActivated.addListener(chrome.tabs.executeScript(null, { file: './foreground.js' }));

chrome.tabs.onUpdated.addListener(chrome.tabs.executeScript(null, { file: './foreground.js' }));

chrome.tabs.onHighlighted.addListener(chrome.tabs.executeScript(null, { file: './foreground.js' }));
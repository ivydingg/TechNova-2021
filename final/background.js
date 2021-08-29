var pageConditions = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        schemes: ["http","https"]
      }
    }),
  ],
  actions: [
    new chrome.declarativeContent.ShowPageAction()
  ]
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([pageConditions]);
  });
});
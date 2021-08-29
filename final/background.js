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

// const names_to_data_mapping = chrome.runtime.getURL('parsing/brand_data_json.txt');
// fetch(names_to_data_mapping)
// .then((response) => response.json())
// .then((json) => {
// 	chrome.storage.local.set({names_to_data: json}, function() {
// 	});
// });

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([pageConditions]);
  });
});
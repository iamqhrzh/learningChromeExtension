```js

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
      chrome.tabs.query({ active: true }, function(tabs) {
           chrome.tabs.remove(tabs[0].id);
      });
  },
  {urls:["*://mock_didi_project.com/*"]},
  ['blocking']
);

```
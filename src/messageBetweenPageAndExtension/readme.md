### page communicate to contentScript by events

#### page
```js
	var triggerMessage = function () {
		var event = new Event('message');
		document.body.dispatchEvent(event);
	};
```
#### contentScript
```js
document.body.addEventListener('message', function () {
	// handleEvent
});
```


### contentScript comunicate to background by message.

#### contentScript
```js
// document.body.addEventListener('message', function () {
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  alert(response.farewell);
	});
// });
```
#### background
```js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
        	"from a content script:" + sender.tab.url :
            "from the extension");
    if (request.greeting == "hello") {
    	alert(request.greeting);
      	sendResponse({farewell: "goodbye"});
    }
});
```
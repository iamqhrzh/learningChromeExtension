document.body.addEventListener('message', function () {
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  alert(response.farewell);
	});
});
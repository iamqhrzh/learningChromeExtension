

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	// // closetab
	// chrome.tabs.query({ active: true }, function(tabs) {
	//      chrome.tabs.remove(tabs[0].id);
	// });
    console.log(sender.tab ?
        	"from a content script:" + sender.tab.url :
            "from the extension");
    if (request.greeting == "hello") {
    	alert(request.greeting);
      	sendResponse({farewell: "goodbye"});
    }
});



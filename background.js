chrome.webRequest.onBeforeRequest.addListener(
  (info) => {
    console.log("in onBeforeRequest: " + info.url);
    chrome.tabs.create({ url: "http://www.google.com" });
  },
  // filters
  {
    urls: [
      "https://kuku.com/*"
    ]
  }
);

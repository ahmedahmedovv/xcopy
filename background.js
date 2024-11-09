chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "xcopy",
    title: "XCopy",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "xcopy") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: text => {
        const el = document.createElement('textarea');
        el.value = text.replace(/\s+/g, ' ').trim();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      },
      args: [info.selectionText]
    });
  }
});

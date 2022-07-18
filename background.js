"use strict";
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "key",
    title: "Dịch",
    type: "normal",
    contexts: ["selection"],
  });
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  const text = info.selectionText.replace(/\s{2,}/g, " ").replace("’", "'");
  fetch(
    "http://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=" +
      text +
      "&ie=UTF-8&oe=UTF-8"
  )
    .then((response) => response.json())
    .then((data) => {
      showWindow(data[0]);
      console.log(data[0]);
    });
});
const a = 400;
const b = 370;

function showWindow(text) {
  chrome.storage.sync.set({ text: text }, function () {
    chrome.windows.getCurrent(function (window) {
      chrome.windows.create({
        url: chrome.runtime.getURL("mypage.html"),
        type: "popup",
        width: a,
        height: b,
        left: window.left + Math.round((window.width - a) / 2),
        top: window.top + Math.round((window.height - b) / 2),
        focused: true,
      });
    });
  });
}

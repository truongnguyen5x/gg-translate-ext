document.addEventListener("DOMContentLoaded", function (event) {
    const list = document.getElementById('list');
    const text = document.getElementById('content');
    document.body.style.marginLeft = 0;
    chrome.storage.sync.get(['text'], function (result) {
        text.innerText = result.text[0][0];
        for (let i = 1; i < result.text.length; i++) {
            let temp = text.cloneNode(true);
            temp.innerText = result.text[i][0];
            list.appendChild(temp);
        }
    });
    chrome.storage.onChanged.addListener(function (changes, area) {
        window.close();
    });
});



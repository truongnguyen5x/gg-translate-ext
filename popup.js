document.addEventListener("DOMContentLoaded", function (event) {
  const list = document.getElementById("content");

  document.body.style.marginLeft = 0;
  chrome.storage.sync.get(["text"], function (result) {
    console.log(result.text);
    // text.innerText = result.text[0][0];
    for (let i = 0; i < result.text.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = result.text[i][1];
      let td2 = document.createElement("td");
      td2.innerText = result.text[i][0];
      tr.appendChild(td1);
      tr.appendChild(td2);
      list.appendChild(tr);
    }
  });
  chrome.storage.onChanged.addListener(function (changes, area) {
    window.close();
  });
});

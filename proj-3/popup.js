document.getElementById("get-urls-btn").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      var tabUrls = [];
      for (var i = 0; i < tabs.length; i++) {
        tabUrls.push(tabs[i].url);
      }
      displayTabUrls(tabUrls);
    });
  });
  
  function displayTabUrls(urls) {
    var ul = document.getElementById("tab-urls");
    ul.innerHTML = ""; // Clear previous entries
    for (var i = 0; i < urls.length; i++) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = urls[i];
      a.target = "_blank";
      a.textContent = urls[i];
      li.appendChild(a);
      ul.appendChild(li);
    }
  }
  
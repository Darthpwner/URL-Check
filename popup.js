document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  alert("checkPageButton: " + checkPageButton);

  checkPageButton.addEventListener('click', function() {
    alert("CLICK success");

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      alert("chrome.tabs.getSelected SUCESS: ");
      alert("WHAT IS GOING ON?");

      var f = d.createElement('form');
      console.log("f value: " + f);

      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
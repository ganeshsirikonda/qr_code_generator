document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
  
     
      var qr = new QRCode(document.getElementById("qrCode"), {
        text: url,
        width: 128,
        height: 128
      });
    });
  });
  
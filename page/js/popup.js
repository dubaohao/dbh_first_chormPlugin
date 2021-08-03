let popup = document.getElementById('popup');

  chrome.storage.sync.get('color', function(data) {
    popup.style.backgroundColor = data.color;
    popup.setAttribute('value', data.color);
  });
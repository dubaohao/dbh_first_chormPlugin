let page = document.getElementById('buttonDiv');
page.style.display = 'flex'
page.style.justifyContent = 'center'
page.style.alignItems = 'center'

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('input');
    console.log(button)
    button.type = 'button'
    button.style.background = item
    // button.style.color = item
    button.style.flex = 1
    button.value = item
    button.style.fontWeight = 500
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);
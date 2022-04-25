function copyThisText() {
  navigator.clipboard.writeText('altcraft.online')
  document.querySelector('.play-block__copytext').textContent = 'Скопировано!'

  setTimeout(clearTempText, 3000)

  function clearTempText() {
    document.querySelector('.play-block__copytext').textContent = 'altcraft.online'
  }
}

document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active')
  document.querySelector('#menu').classList.toggle('header-nav_active')
  document.querySelector('#scroll-off').classList.toggle('header_fixed')
  document.querySelectorAll('.burger__selector').forEach(function (burgerIconActive) {
    burgerIconActive.classList.toggle('burger__icon__active')
  })
})

let xhr = new XMLHttpRequest();
xhr.open('GET', 'content.md', false);
xhr.send();
let file = xhr.responseText || '';

document.getElementById('content').innerHTML =
  marked.parse(file)

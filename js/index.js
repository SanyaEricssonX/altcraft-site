function copyThisText() {
  let copyText = document.getElementById('textToCopy');
  navigator.clipboard.writeText(copyText.textContent);
}
document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active')
  document.querySelector('#menu').classList.toggle('header-nav_active')
  document.querySelector('#scroll-off').classList.toggle('header_fixed')
  document.querySelectorAll('.burger__selector').forEach(function (burgerIconActive) {
    burgerIconActive.classList.toggle('burger__icon__active')
  })
})

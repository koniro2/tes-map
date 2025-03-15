const $locatebtn = document.querySelector('.location-button');
const $nolabel = document.querySelector('.map-nolabel');
const $label = document.querySelector('.map-label');

$locatebtn.addEventListener('click', () => {
  $label.classList.toggle('fadeIn');
  $nolabel.classList.toggle('fadeIn');
});
$(function () {
  'use strict';

  //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  });

  //===== Slick

  $('.slider-active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    fade: true,
    pauseOnHover: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  //=====

  new WOW().init();
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbx_HhIqhF72V6mrbKN1GO23UuqJLBfSD3ImTZtArYgtzXxDuiTSxhDKmjBzHWevebJZ/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btrn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const btnAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
//   ketika Tombol submit diklik
// tampilkan tombol loading,hilangkang tombol loading
btnLoading.classList.tooggle('d-noe');
btnKirim.classList.toggle('d-none')
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
  // tampilkan tombol kirim,hilangkan tombol loading
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  // Tambilkan alert
  myAlert.classList.toggle('d-none');
  // Reset Form
  form.reset();
  
  console.log('Success!', response);

})
.catch(error => console.error('Error!', error.message))
})

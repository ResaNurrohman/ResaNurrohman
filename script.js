// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelector('section');
// let navLinks = document.querySelector('header nav a');

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove('active');
//         document.querySelector('header nav a [herf*=' + id + ' ]').classList.add('active');
//       });
//     }
//   });
// };

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// };

// navbar aktif
const navbarNav = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#menu-icon');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList, remove('active');
  }
});
// navbar aktif akhir

const scriptURL = 'https://script.google.com/macros/s/AKfycbxonumNSxTNjiMeJhe2x7O5ZfwZzVmEo04EWEuq6SxYPU_n2x-6zLXqqqhkXA09tVCwew/exec';
const form = document.forms['resa-contact-form'];
const btnKirim = document.querySelector('.btn1');
const btnLoading = document.querySelector('.btn2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('active');
  btnKirim.classList.toggle('active');
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => {
      btnLoading.classList.toggle('active');
      btnKirim.classList.toggle('active');
      form.reset();
      alert('pesan berhasil kami terima');
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

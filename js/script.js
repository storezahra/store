// toogle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger-menu diklik = jalanin fungsi berikut ini, yaitu memberikan navbar-nav classlist 'active' nya di toggle (tambahin/hilangin)
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
// line 14: ketika klik menjalankan fungsi dan ambil eventnya 'function(e)'
// line 15: jika yg e.target(yg diklik mouse) !hamburger & !navbarNav (bukan hamburger dan navbar), selain itu.
// line 16:memberikan navbar-nav classlist 'active' nya di remove (hilangkan)
document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
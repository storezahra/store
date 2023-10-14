// toogle class active hamburger-menu 
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger-menu diklik = jalanin fungsi berikut ini, yaitu memberikan navbar-nav classlist 'active' nya di toggle (tambahin/hilangin)
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();// (e)event href dibatalkan
};

// toogle class active search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();// (e)event href dibatalkan
};

// toogle class active shopping-cart-button
const shoppingCart = document.querySelector('.shopping-cart');
const cartButtons = document.querySelectorAll('#shopping-cart-button, .item-cart-button');

// 1 selector
// document.querySelector('#shopping-cart-button').onclick = (e) => {
//   shoppingCart.classList.toggle('active');
//   e.preventDefault();
// };

cartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
  });
});




// klik diluar diluar elemen
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

// line 14: ketika klik menjalankan fungsi dan ambil eventnya 'function(e)'
// line 15: jika yg e.target(yg diklik mouse) !hamburger & !navbarNav (bukan hamburger dan navbar), selain itu.
// line 16:memberikan navbar-nav classlist 'active' nya di remove (hilangkan)
document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!shoppingCart.contains(e.target) && !shoppingCartButton.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});


// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// looping, itemDetailButtons kalau di foreach maka tiap btn didalamnya jalankan function, btn diklik tambahkan flex
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();// (e)event href dibatalkan
  };
});


// klik tombol close di modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();// (e)event href dibatalkan
}

// klik diluar elemen
// saat dimanapun modal diklik berikan style display none, kecuali modal-container
window.onclick = (e) => {
  if (e.target === itemDetailModal){
    itemDetailModal.style.display = 'none';
  }
}


// matikan scroll button lainnya
document.querySelector('.modal .add-to-cart').onclick = (e) => {
  e.preventDefault();// (e)event href dibatalkan
}



window.onload = function () {
  document.querySelector('.mobile-menu__btn').classList.remove('no_JS');
  document.querySelector('.top-menu__btn').classList.remove('no_JS');
  if(window.innerWidth < 768) {
    document.querySelector('.mobile-menu').classList.add('mobile-menu--close');
  }

};
document.querySelector('.top-menu__btn').onclick =
  function () {
    document.querySelector('.mobile-menu').classList.remove('mobile-menu--close');
    document.querySelector('.top-menu__btn').classList.add('mobile-menu--open');
  };
document.querySelector('.mobile-menu__btn').onclick =
  function () {
    document.querySelector('.mobile-menu').classList.add('mobile-menu--close');
    document.querySelector('.top-menu__btn').classList.remove('mobile-menu--open');
  };

const mobileMenu = () => {
  const body = document.querySelector('.js-body');
  const btn = document.querySelector('.js-header-burger');
  const menu = document.querySelector('.js-sidebar');

  btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    body.classList.toggle('is-noscroll');
  });
};

export default mobileMenu;

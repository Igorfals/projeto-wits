const header = document.querySelector('header');
const headerNavSocial = document.querySelector('.header-nav-social-container');
const scrollPositionToShowModifiedHeader = 50;

function handleScroll() {
    if (window.scrollY > scrollPositionToShowModifiedHeader) {
        header.classList.add('header-bg');
        header.classList.remove('header-transparent');
        headerNavSocial.classList.add('header-bg');
        headerNavSocial.classList.remove('header-transparent');
    } else {
        header.classList.remove('header-bg');
        header.classList.add('header-transparent');
        headerNavSocial.classList.remove('header-bg');
        headerNavSocial.classList.add('header-transparent');
    }
}

window.addEventListener('scroll', handleScroll)

const hamburgerMenu = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.header-nav-social-container');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('visible');
});
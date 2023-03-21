const header = document.querySelector('header');
const scrollPositionToShowModifiedHeader = 50;

function handleScroll() {
    if (window.scrollY > scrollPositionToShowModifiedHeader) {
        header.classList.add('header-bg');
        header.classList.remove('header-transparent');
    } else {
        header.classList.remove('header-bg');
        header.classList.add('header-transparent');
    }
}

window.addEventListener('scroll', handleScroll)
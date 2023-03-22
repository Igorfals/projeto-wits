const slidesContainer = document.querySelector(".client__logo");
const slide = document.querySelector(".client__logo__content");
const prevButton = document.getElementById("slide-left-button");
const nextButton = document.getElementById("slide-right-button");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slide.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slide.scrollLeft -= slideWidth;
});

const images = document.querySelectorAll('#slide img');
function rodar() {
    [images[0].src, images[1].src, images[2].src, images[3].src, images[4].src] = [images[1].src, images[2].src, images[3].src, images[4].src, images[0].src]
    images[2].classList.remove('active');
    images[2].classList.add('active2');
    setTimeout(() => {
        images[2].classList.remove('active2');
        images[2].classList.add('active');
    }, 400)
}
setInterval(() => {
    rodar()
}, 6000);
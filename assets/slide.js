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
const navSlide = () => {
    const Hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".header__navlinks");
    const navLinks = document.querySelectorAll(".header__navlinks li");

    Hamburger.addEventListener("click", () => {
        navbar.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinksAnimation 0.5s ease forwards ${
                index / 5 + 0.3
            }s`;
        });
    });
};
navSlide();

const navbar = document.querySelector("nav");
window.onscroll = function () {
    if (window.scrollY >= 300) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

const nav = document.querySelector(".header__navlinks");
const navLinks = document.querySelectorAll(".header__navlinks");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    });
});

// Navbar DOM Elements  //
// ================================================================= //
const Navbar = document.getElementById('nav');
const NavbarHamburgerToggle = document.getElementById('hamburger-toggle');
const NavbarMobile = window.matchMedia("(max-width: 800px)");
const NavbarDisplayClass = Navbar.classList.contains('display-none');

// Preloader Functions
// ================================================================= //
const preloader = document.querySelector('.preloader');
setTimeout(function () {
    preloader.classList.add('preloader--disappear');

}, 500);

setTimeout(function () {
    preloader.classList.add('display-none');

}, 1000);

// Navbar Mobile Responsive Event Listener
// ================================================================= //
NavbarHamburgerToggle.addEventListener('click', () => {
    Navbar.classList.toggle('nav-display-none')
});

let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.results-wrapper',
    },
});

timeline
    .from(".results-description", { y: 40, opacity: 0, duration: 1 }, "-1")
    .from('.cta', { x: 35, opacity: 0, duration: 1 })

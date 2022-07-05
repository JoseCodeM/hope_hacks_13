// Navbar DOM Elements  //
// ================================================================= //
const Navbar = document.getElementById('nav');
const NavbarHamburgerToggle = document.getElementById('hamburger-toggle');
const NavbarMobile = window.matchMedia("(max-width: 800px)");
const NavbarDisplayClass = Navbar.classList.contains('display-none');

// Navbar Mobile Responsive Event Listener
// ================================================================= //
NavbarHamburgerToggle.addEventListener('click', () => {
    Navbar.classList.toggle('nav-display-none')
});


// pop box

function openForm() {
    document.querySelector('#myForm').style.display = "block";
  }
  
  function closeForm() {
    document.querySelector('#myForm').style.display = "none";
  } 
  
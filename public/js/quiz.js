// Navbar DOM Elements  //
// ================================================================= //
const Navbar = document.getElementById('nav');
const NavbarHamburgerToggle = document.getElementById('hamburger-toggle');
const NavbarMobile = window.matchMedia("(max-width: 800px)");
const NavbarDisplayClass = Navbar.classList.contains('display-none');

// Progress Bar DOM Elements  //
// ================================================================= //
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const submit = document.getElementById('submit');
const progressCircles = document.querySelectorAll('.circle');

// Quiz Content DOM Elements
// ================================================================= //
const quizContent = document.querySelectorAll('.quiz-content-wrapper');
const quizSubmit = document.getElementById('quiz');

// State Variables
// ================================================================= //
let currentActive = 1;
let currentActiveQuiz = currentActive - 1;
let quizValue = [0, 0, 0, 0];

// Navbar Mobile Responsive Event Listener
// ================================================================= //
NavbarHamburgerToggle.addEventListener('click', () => {
    Navbar.classList.toggle('nav-display-none')

});

// Preloader Functions
// ================================================================= //
const preloader = document.querySelector('.preloader');
setTimeout(function () {
    preloader.classList.add('preloader--disappear');

}, 500);

setTimeout(function () {
    preloader.classList.add('display-none');

}, 1000);



// "Next" button Event Listener
// ================================================================= //
next.addEventListener('click', () => {
    quizContent[currentActive - 1].classList.add('display-none');
    quizContent[currentActive].classList.remove('display-none');

    if (currentActive - 1 === 0) {
        quizContent[currentActive].classList.remove('display-none')
    };

    currentActive++;
    if (currentActive > progressCircles.length) {
        currentActive = progressCircles.length;
    };

    if (currentActive - 1 >= 3) {
        next.classList.add('display-none')
        submit.classList.remove('display-none')
    }

    updateProgressBar();
})

// Previous button Event Listener
// ================================================================= //
prev.addEventListener('click', () => {
    // console.log(currentActive)
    // console.log(quizContent[currentActive - 1])

    quizContent[currentActive - 1].classList.add('display-none')
    quizContent[currentActive - 2].classList.remove('display-none')

    if (!currentActive === 4) {
        quizContent[currentActive].classList.add('display-none')
    }

    if (currentActive - 1 <= 3) {
        next.classList.remove('display-none')
        submit.classList.add('display-none')
    }

    currentActive--;

    if (currentActive < 1) {
        currentActive = 1
    };

    updateProgressBar();
})

// Update Progress Bar Function
// ================================================================= //
function updateProgressBar() {

    progressCircles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (progressCircles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === progressCircles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false
    }
}

function valueChosen(index, elementId) {
    const selectedRadio = document.getElementById(elementId).value;
    if (quizValue[index] === 0) {
        quizValue[index] += Number(selectedRadio)
    }

    if (quizValue[index] - [index] === 0) {
        quizValue[index] -= quizValue[index]
        quizValue[index] += Number(selectedRadio)
    }

    if (quizValue[index] > 0) {
        quizValue[index] -= quizValue[index]
        quizValue[index] += Number(selectedRadio)
    }
}

// quizSubmit.addEventListener('submit', (e) => {
//     console.log('Hello')
// })


let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.quiz-content-wrapper',
    },
});

timeline
    .from(".quiz-title", { y: 35, opacity: 0, duration: .5 }, "-1")
    .from('.quiz-radios', { y: 15, opacity: 0, duration: .4 })

// WHEN They Click Submit
// THEN Display Load Screen
//      + WHILE result is being identified to a specific ID in the Database
    // Send a query that fetches the ID of the condition based on the results
    // Then after retrieving those results. do res.render() or render the results on to the page using EJS variables
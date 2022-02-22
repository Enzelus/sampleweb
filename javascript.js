

// const prevScrollpos = window.pageYOffset;
// let navbar = document.getElementsByClassName('navbar');

// window.onscroll = function () {

//     let currentScrollpos = window.pageYOffset;

//     if (prevScrollpos > currentScrollpos) {

//         navbar.style.top = '0';
//     }

//     else {
//         navbar.style.top = '-50px';
//     }

//     prevScrollpos = currentScrollpos
// }

const navbar = document.getElementById('navbar');

let prevScrolled = window.scrollY;

addEventListener('scroll', () => {
    

    if (window.scrollY > prevScrolled) {
        navbar.style.top = '-100vh'
        // console.log("We're Going Down!")
    }

    else {

        // console.log("We're Going Up!")
        navbar.style.top = "0"
    }

    prevScrolled = window.scrollY;

})

window.addEventListener('load', () => {
    document.querySelector(".loading").classList.add("loading-hide")
})

const footer = document.getElementById("footer");
const backUp = document.querySelector(".back-up");
const options = {};
const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        // console.log(entry)
        if (!entry.isIntersecting) {
            backUp.style.right = '-200px'
        }

        else {
            backUp.style.right ='0'
        }
    });
}, options);

observer.observe(footer);

const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.navlinks');

burger.addEventListener('click', () => {

        navlinks.classList.toggle('navlinks-active')
        burger.classList.toggle('open')

})

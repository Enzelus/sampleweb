

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
        navbar.style.top = '-100px'
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


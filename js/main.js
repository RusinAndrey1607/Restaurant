$(function() {
    $('.testimonials__items').slick({
        arrows: false,
        dots: true,

    })
})
let one__number = 0
let two__number = 0
let three__number = 0
const one = document.querySelector('.number--one')
const two = document.querySelector('.number--two')
const three = document.querySelector('.number--three')


const intervalId = setInterval(() => {
    one__number < 93 && one__number++;
    two__number < 206 && two__number++;
    three__number < 71 && three__number++;
    one.innerHTML = one__number
    two.innerHTML = two__number
    three.innerHTML = three__number
    two__number == 206 && clearInterval(intervalId)
}, 100)

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector(".body");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("active");
});


menu.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("active");
})
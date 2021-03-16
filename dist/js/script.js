"use strict";

const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

// TODO: Line orange % ------------------------------------------------------------------------
const counters = document.querySelectorAll(".calc__percent"),
    lines = document.querySelectorAll(".calc__line_undr span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


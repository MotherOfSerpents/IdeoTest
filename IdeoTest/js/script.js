"use strict";
const lupa = document.querySelector(".lupa");
const szukaj = document.querySelector(".szukaj");
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".navBtn");

function openNav() {
  nav.style.width = "250px";
}

function closeNav() {
  nav.style.width = "0px";
}

function modifyNav() {
  if (nav.style.width == "0px") {
    openNav();
    navBtn.style.transform = "none";
  } else {
    closeNav();
    navBtn.style.transform = "rotate(180deg)";
  }
}

function szukajShow() {
  szukaj.style.opacity = "100";
}

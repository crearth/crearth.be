const geduldboot = document.querySelector(".geduldboot");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const hero = document.querySelector("#hero")


const tl = new TimelineMax();

tl.fromTo(geduldboot,1.5, {height: "0%"}, {height: "60vh"});
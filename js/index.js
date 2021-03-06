const link = document.querySelectorAll(".item__nav");
const btnSetting = document.querySelector(".btn__steting");
const setting = document.querySelector(".box__setting");
const btnScroll = document.querySelector(".btn__scroll");
const searchBox = document.querySelector(".search__box");
const btnClear = document.querySelector(".btn__clear");
const btnSearch = document.querySelector(".btn__search");
const btnRegions = document.querySelector(".btn__regions");
const boxRegions = document.querySelector(".box__regions");
const boxModerate = document.querySelector(".box__moderate");
const btnModerate = document.querySelector(".btn__moderate");
const boxAnytime = document.querySelector(".box__Anytime");
const btnAnytime = document.querySelector(".btn__Anytime");

import { settings } from "./setting.js";

const body = document.querySelector("body");
const checkElement = (e) => {
  let flag = true;
  const test = [...setting.getElementsByTagName("*")];
  test.find((i) => {
    if (i == e.target || e.target == setting) flag = false;
  });

  return flag;
};
// hide setting
document.addEventListener("click", (e) => {
  const btn = e.target.parentElement.classList;
  if (!btn.contains("btn__steting") && checkElement(e) != false) {
    setting.classList.add("activ");
  }
  if (!e.target.parentElement.classList.contains("btn__regions")) {
    boxRegions.classList.add("hide");
  }
  if (!e.target.parentElement.classList.contains("btn__moderate")) {
    boxModerate.classList.add("hide");
  }
  if (!e.target.parentElement.classList.contains("btn__Anytime")) {
    boxAnytime.classList.add("hide");
  }
});
//  hide and show setting
btnSetting.addEventListener("click", (e) => {
  setting.classList.toggle("activ");
});
//  hide btnScroll
window.addEventListener("scroll", (e) => {
  if (scrollY <= 80) {
    btnScroll.classList.add("hide");
  } else {
    btnScroll.classList.remove("hide");
  }
});
// Move to the first page
btnScroll.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// hide  the button when not focus
searchBox.addEventListener("focusout", (e) => {
  hide(e);
});
// add style the boxSearch  when focus
searchBox.addEventListener("focus", (e) => {
  show(e);
});
// show style at element
function show(e) {
  if (e.target == searchBox || e.target == btnClear) {
    btnClear.classList.remove("invisible");
    btnSearch.classList.add("bg-blue-500");
    btnSearch.classList.remove("text-gray-500");

    btnSearch.classList.add("text-white");
  }
}
// hide style at element

function hide(e) {
  btnClear.classList.add("invisible");
  btnSearch.classList.remove("bg-blue-500");
  btnSearch.classList.remove("text-white");
  btnSearch.classList.add("text-gray-500");
}
// clear text from input search
btnClear.addEventListener("click", (e) => {
  searchBox.value = "";
});
window.addEventListener("DOMContentLoaded", (e) => {
  btnScroll.classList.add("hide");
});
btnRegions.addEventListener("click", (e) => {
  boxRegions.classList.toggle("hide");
});
btnModerate.addEventListener("click", (e) => {
  boxModerate.classList.toggle("hide");
});
btnAnytime.addEventListener("click", (e) => {
  boxAnytime.classList.toggle("hide");
});

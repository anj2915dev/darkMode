const btnDark = document.querySelector(".btn__dark");
const btnLite = document.querySelector(".btn__lite");
const itemFontSize = document.querySelector(".font__size");
const itemFontFamily = document.querySelector(".font__family");
const domHtml = document.querySelector("*");
const elements = document.querySelectorAll("body");
const searchBox = document.querySelector(".search__box");

export class settings {
  // add font and theme in loclStorage
  setLocalStoreage(s) {
    window.localStorage.setItem("seting", JSON.stringify(s));
  }
  // get data in localStorage
  getData() {
    return JSON.parse(localStorage.getItem("seting"));
  }
  // add tehme dark
  themeDark() {
    btnDark.addEventListener("click", (e) => {
      const obj1 = { ...this.getData(), theme: "dark" };

      domHtml.classList.add("dark");

      this.setLocalStoreage(obj1);
    });
  }
  // add theme Lite
  themeLite() {
    btnLite.addEventListener("click", (e) => {
      const obj1 = { ...this.getData(), theme: "lite" };

      domHtml.classList.remove("dark");

      this.setLocalStoreage(obj1);
    });
  }
  //   select fontSize
  setFontSize(fontSize) {
    elements.forEach((i) => {
     
      switch (fontSize) {
        case "کوچک":
          i.classList.add("text-sm");
          i.classList.remove("text-2xl");
          i.classList.remove("text-xl");

          break;
        case "متوسط":
          i.classList.add("text-xl");
          i.classList.remove("text-sm");
          i.classList.remove("text-2xl");

          break;
        case "بزرگ":
          i.classList.add("text-2xl");
          i.classList.remove("text-sm");
          i.classList.remove("text-xl");

          break;
      }
    });
  }
  setFontFamily(fontFamily) {
    switch (fontFamily) {
      case "Yekan":
        domHtml.classList.add("font__iran");
        break;

      case "defult":
        domHtml.classList.remove("font__iran");

        break;
    }
  }
  selectFontSize() {
    itemFontSize.addEventListener("click", (e) => {
      const numberFont = e.target.value;
      // edit object at  localStorage
      const obj1 = { ...this.getData(), font: numberFont };

      this.setFontSize(numberFont);
      this.setLocalStoreage(obj1);
    });
  }
  selectFontFamily() {
    itemFontFamily.addEventListener("click", (e) => {
      const fontFamily = e.target.value;
      // edit object at  localStorage
      const obj1 = { ...this.getData(), fontFamily: fontFamily };

      this.setFontFamily(fontFamily);
      this.setLocalStoreage(obj1);
    });
  }
  //  check status theme

  checkThemePage() {
    if (window.localStorage.length != 0)
      if (this.getData().theme == "lite") {
        domHtml.classList.remove("dark");
      } else domHtml.classList.add("dark");
  }
  checkFontSizePage() {
    if (window.localStorage.length != 0) {
      const font = this.getData().font;
      itemFontSize.value = font;
      this.setFontSize(font);
    }
  }
  checkFontFamilyPage() {
    if (window.localStorage.length != 0) {
      const font = this.getData().fontFamily;
      itemFontFamily.value = font;
      this.setFontFamily(font);
    }
  }
}

window.addEventListener("DOMContentLoaded", (e) => {
  const setting = new settings();
  setting.themeDark();
  setting.themeLite();
  setting.selectFontSize();
  setting.selectFontFamily();
  setting.checkThemePage();
  setting.checkFontSizePage();
  setting.checkFontFamilyPage();
});



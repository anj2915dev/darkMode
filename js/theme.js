const btnDark = document.querySelector(".btn__dark");
const btnlite = document.querySelector(".btn__lite");
const itemFontSize = document.querySelector(".font__size");
const itemFontFamily = document.querySelector(".font__family");
const domHtml = document.querySelector("html");

class settings {
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
  thimeLite() {
    btnlite.addEventListener("click", (e) => {
      const obj1 = { ...this.getData(), theme: "lite" };

      domHtml.classList.remove("dark");

      this.setLocalStoreage(obj1);
    });
  }
  //   select fontSize
  setfontSize(fontSize) {
    switch (fontSize) {
      case "12":
        domHtml.classList.add("text-xs");
        domHtml.classList.remove("text-sm");
        domHtml.classList.remove("text-xl");
        break;
      case "14":
        domHtml.classList.add("text-sm");
        domHtml.classList.remove("text-xs");
        domHtml.classList.remove("text-xl");
        break;
      case "16":
        domHtml.classList.add("text-xl");
        break;

      case "defult":
        domHtml.classList.remove("text-xs");
        domHtml.classList.remove("text-sm");
        domHtml.classList.remove("text-xl");

        break;
    }
  }
  setfontFamily(fontFamily) {
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

      this.setfontSize(numberFont);
      this.setLocalStoreage(obj1);
    });
  }
  selectFontFamily() {
    itemFontFamily.addEventListener("click", (e) => {
      const fontFamily = e.target.value;
      // edit object at  localStorage
      const obj1 = { ...this.getData(), fontFamily: fontFamily };

      this.setfontFamily(fontFamily);
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
      this.setfontSize(font);
    }
  }
  checkFontFamilyPage() {
    if (window.localStorage.length != 0) {
      const font = this.getData().fontFamily;
      itemFontFamily.value = font;
      this.setfontFamily(font);
    }
  }
}

window.addEventListener("DOMContentLoaded", (e) => {
  const setting = new settings();
  setting.themeDark();
  setting.thimeLite();
  setting.selectFontSize();
  setting.selectFontFamily();
  setting.checkThemePage();
  setting.checkFontSizePage();
  setting.checkFontFamilyPage();
});

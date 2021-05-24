// 코드 구현

const $checkbox = document.querySelector(".dark-mode");
// const $checkbox = document.querySelector(".light-mode");
const modeState = document.getElementById('modeID');
const isUserColorTheme = localStorage.getItem("color-theme");
const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "light"
  : "dark";

const getUserTheme = () =>
  isUserColorTheme ? isUserColorTheme : isOsColorTheme;

window.onload = function () {
  if (getUserTheme === "light") {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    modeState.innerHTML = '<span class="mode-text">라이트모드</span>';
  } else {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    modeState.innerHTML = '<span class="mode-text">다크모드</span>';
    $checkbox.setAttribute("checked", true);
  }
};

$checkbox.addEventListener("click", (e) => {
  if (e.target.checked) {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    modeState.innerHTML = '<span class="mode-text">라이트모드</span>';
  } else {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    modeState.innerHTML = '<span class="mode-text">다크모드</span>';
  }
});

console.log(isOsColorTheme);
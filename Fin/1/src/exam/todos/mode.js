// 코드 구현

const $checkbox = document.querySelector(".dark-mode");
// const $checkbox = document.querySelector(".light-mode");
<<<<<<< HEAD
const modeState = document.getElementById('modeID');
const isUserColorTheme = localStorage.getItem("color-theme");
const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "light"
  : "dark";
=======

const isUserColorTheme = localStorage.getItem("color-theme");
const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
>>>>>>> 26baae35ac139d2d804634bc73f4c8d554bc304b

const getUserTheme = () =>
  isUserColorTheme ? isUserColorTheme : isOsColorTheme;

window.onload = function () {
<<<<<<< HEAD
  if (getUserTheme === "light") {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    modeState.innerHTML = '<span class="mode-text">라이트모드</span>';
  } else {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    modeState.innerHTML = '<span class="mode-text">다크모드</span>';
    $checkbox.setAttribute("checked", true);
=======
  if (getUserTheme === "dark") {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    $checkbox.setAttribute("checked", true);
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
>>>>>>> 26baae35ac139d2d804634bc73f4c8d554bc304b
  }
};

$checkbox.addEventListener("click", (e) => {
  if (e.target.checked) {
<<<<<<< HEAD
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
=======
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
  }
});

console.log(isOsColorTheme);
>>>>>>> 26baae35ac139d2d804634bc73f4c8d554bc304b

function switchTheme() {
  const lightTheme = "fa-regular fa-sun fa-lg";
  const darkTheme = "fa-regular fa-moon fa-lg";

  let switcher = document.getElementById("theme-switcher");
  if (switcher.className === lightTheme) {
    document.getElementById("theme-switcher").className = darkTheme;
  } else {
    document.getElementById("theme-switcher").className = lightTheme;
  }
}

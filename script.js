function toggleMode() {
  const html = document.documentElement;
  const image = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/Avatar.png");
  } else {
    image.setAttribute("src", "./assets/Avatar2.png");
  }
  html.classList.toggle("light");
}

const nav1 = document.querySelector(".header-top nav");
const sidebar1 = document.querySelector(".header-top #sidebar");
const nav2 = document.querySelector(".header-center nav");
const sidebar2 = document.querySelector(".header-center #sidebar");

sidebar1.addEventListener("click", () => {
  if ((nav1.style.display === "none")) {
    nav1.style.display = "flex";
  } else {
    nav1.style.display = "none";
  }
});

sidebar2.addEventListener("click", () => {
  if ((nav2.style.display === "none")) {
    nav2.style.display = "flex";
  } else {
    nav2.style.display = "none";
  }
});

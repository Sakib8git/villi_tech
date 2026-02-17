const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
// nav bar er responsive dropdown
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

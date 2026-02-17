const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
const bookButtons = document.querySelectorAll(".book-now");
// nav bar  dropdown
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
// book now btn 
bookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("hi");
  });
});

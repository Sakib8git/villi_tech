const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
const bookButtons = document.querySelectorAll(".book-now");
// nav bar  dropdown
menuToggle.addEventListener("click", () => {
  // alert("btn clicd");
  navList.classList.toggle("active");
});
// book now btn
bookButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // alert("btn clicd");
    e.preventDefault();
    Calendly.initPopupWidget({
      url: "https://calendly.com/worksakib30",
    });
    return false;
  });
});

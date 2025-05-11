
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const experienceBox = this.closest(".experience-box");
      const fullDesc = experienceBox.querySelector(".full-desc");

      if (fullDesc) {
        fullDesc.style.display = "block"; 
        this.style.display = "none"; 
      }
    });
  });
});

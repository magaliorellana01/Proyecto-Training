const burger = document.querySelector(".burger")
const navLinks = document.querySelector(".links")

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})
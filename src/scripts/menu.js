const burger = document.querySelector(".burger"); /* Stregerne */ 
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu"); /* Dropdown */
const links = document.querySelectorAll(".menu li a"); /* Links i dropdown */

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => { /* Fjerner "active", når der trykkes på et link */
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

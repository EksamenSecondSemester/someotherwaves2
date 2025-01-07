document.addEventListener("scroll", function () { /* Lytter efter et scroll */

  const header = document.querySelector("header");
  
  if (window.scrollY > 0) { /* Hvis scroll er mere end 0, så aktiveres header.scrolled */
    header.classList.add("scrolled");
  } 
  
  else {
    header.classList.remove("scrolled");
  }
});

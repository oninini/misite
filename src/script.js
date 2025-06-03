
window.addEventListener("scroll", function () {
  if (window.scrollY > 555) {
    document.body.classList.add("scrolled"); 
  } else {
    document.body.classList.remove("scrolled"); 
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 555) {
    document.body.classList.add("scrolled"); 
  } else {
    document.body.classList.remove("scrolled"); 
  }
});

function handleClick(ditto) {
  alert(`You clicked on ${ditto}!`);
}


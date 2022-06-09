const toggleBtn = document.querySelector(".toggle-nav");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  /*alert('button was pressed');*/
  /*console.log(links.classList); */
  links.classList.toggle("show-links");
});

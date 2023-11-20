const navbar = document.getElementsByTagName("nav")[0];
const canvas = document.querySelector(".offcanvas");
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "nav-color");
    canvas.style.height = "100vh";
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
  }
});

// search bar
function search() {
  let filter = document.getElementById("search").value.toUpperCase();
  let item = document.querySelectorAll(".seacrhList");
  let name = document.getElementsByTagName("h5");

  for (var i = 0; i <= name.length; i++) {
    let a = item[i].getElementsByTagName("h5")[0];
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

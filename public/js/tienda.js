//------------------------Nav bar fija------------------------------
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-bar");
console.log(navbar);
var fijo = navbar.offsetTop;
console.log(fijo);

function myFunction() {
  if (window.pageYOffset > fijo) {
      console.log("si");
    navbar.classList.add("app__fijo");
    
  } else {
 navbar.classList.remove("app__fijo");
  }
}
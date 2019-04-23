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

//------------------Interaccion-----------------------
var imgCambio=document.querySelector('.interaccion__imagen');
var mario=document.querySelector('.mario');
var kong=document.querySelector('.kong');
var pika=document.querySelector('.pika');
var wario=document.querySelector('.wario');
var kirby=document.querySelector('.kirby');
var sonic=document.querySelector('.sonic');
var botones=document.querySelectorAll('.interaccion__perso');

function imgMario(event){
  imgCambio.src="imgs/inmario.png";
}
mario.addEventListener('click',imgMario);

function imgKong(event){
  imgCambio.src="imgs/inkong.png";
}
kong.addEventListener('click',imgKong);

function imgPika(event){
  imgCambio.src="imgs/inpika.png";
}
pika.addEventListener('click',imgPika);

function imgWario(event){
  imgCambio.src="imgs/inwario.png";
}
wario.addEventListener('click',imgWario);

function imgKirby(event){
  imgCambio.src="imgs/inkirby.png";
}
kirby.addEventListener('click',imgKirby);

function imgSonic(event){
  imgCambio.src="imgs/insonic.png";
}
sonic.addEventListener('click',imgSonic);

function recorrerBotones(boton){
  function persoActivo(event){
      for (let index = 0; index < botones.length; index++) {
          const boton = botones[index];
          boton.classList.remove('activo');
          
      }
       boton.classList.add('activo');
    
  }
  boton.addEventListener('click',persoActivo);
}
botones.forEach(recorrerBotones);
// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


let botonAumentar = document.getElementById("botonAumentar"); 
let botonReducir = document.getElementById("botonReducir");
let Texto = document.getElementById("Mostrar");

let valor = Texto.value;
var numero = Number(valor);


botonAumentar.onclick = () => {
    numero++;
    Mostrar.value = numero;
}

botonReducir.onclick = () => {
    numero--;
    Mostrar.value = numero;
}


// Cambiar aleatoriamente el color del fondo al darle a un boton
  //  let botonColor = document.getElementById("cambiar_color");
let botonColor = document.getElementById("cambiar_color").addEventListener("click", CambiarFondo, false);

function  CambiarFondo() {
//botonColor.onclick = () => {
    let aleatorio1 = Math.floor(Math.random() * (255 + 1 - 0) + 0);
    let aleatorio2 = Math.floor(Math.random() * (255 + 1 - 0) + 0);
    let aleatorio3 = Math.floor(Math.random() * (255 + 1 - 0) + 0);
    document.body.style.backgroundColor = `rgb(${aleatorio1}, ${aleatorio2}, ${aleatorio3})`;

}

// Cambiar los colores del fondo por separado con tres botones, rojo, verde y azul

let botonRojo = document.getElementById("cambiar_rojo").addEventListener("click", CambiarRojo, false);
let botonVerde = document.getElementById("cambiar_verde").addEventListener("click", CambiarVerde, false);
let botonAzul = document.getElementById("cambiar_azul").addEventListener("click", CambiarAzul, false);


function CambiarRojo() {
   
    let rojo1 = Math.floor(Math.random() * (255 + 1 - 0) + 0);
    document.body.style.backgroundColor = `rgb(${rojo1}, 0, 0)`;
}

function CambiarVerde() {

    let verde = Math.floor(Math.random() * (255 + 1 - 0) + 0);
    document.body.style.backgroundColor = `rgb(0, ${verde}, 0)`;
}

function CambiarAzul() {

    let azul = Math.floor(Math.random() * (255 + 1 - 0) + 0);
    document.body.style.backgroundColor = `rgb(0, 0, ${azul})`;
}
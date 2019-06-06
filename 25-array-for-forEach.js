'use strict'

var lenguajes = new Array("PHP", "Javascript", "C#", "Go", "C", "Python", "Pascal", "NodeJs")

document.write("<h1>Lenguajes de programación del 2019</h1>");

// Inicio1
// document.write("<ul>");
//
//     for (var i = 0; i < lenguajes.length; i++) {
//       document.write("<li>"+lenguajes[i]+"</li>");
//     }
//
// document.write("</ul>");
// Fin1
////////////  AHORA CON EL FOR EACH ///////////////
// Inicio2
document.write("<ul>");
lenguajes.forEach((elemento, indice) =>{
  document.write("<li>"+indice+ " - " +elemento+"</li>");
})

document.write("</ul>");
// Fin2

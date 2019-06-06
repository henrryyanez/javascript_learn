'use strict'

var texto = "Variable global";
var numero = 12;

function holaMundo(texto){
  var hola_mundo = "Texto dentro de funcion"

  console.log(texto);
  console.log(numero.toString());
  console.log(typeof numero.toString());
  console.log(typeof numero);
  console.log(hola_mundo);
}

holaMundo(texto);

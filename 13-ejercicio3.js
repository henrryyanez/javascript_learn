'use strict'

// Hacer una Programa que muestre todos los numeros en dos NUMEROS
// introducidos por el usuario

var numero1 = parseInt(prompt("Introduce el primer (1er) numero: "));
var numero2 = parseInt(prompt("Introduce el segundo (2do) numero: "));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros:</h1>")

for (var i = numero1; i <= numero2; i++) {
  document.write(i+"<br/>");
}

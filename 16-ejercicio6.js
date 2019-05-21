'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Comprobar si el nro no es valido pida de nvo el nro
*/

var numero = parseInt(prompt("Introduce un numero",0));

while (isNaN(numero)) {
  number = parseInt(prompt("Introduce un numero",0));
}

if (numero % 2 == 0) {
  alert("Es un numerom PAR");
}else {
  alert("Es IMPAR");
}

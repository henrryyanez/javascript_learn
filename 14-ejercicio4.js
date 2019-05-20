'use strict'

/*
Mostrar todos los numeros impares que
hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer (1er) numero: "));
var numero2 = parseInt(prompt("Introduce el segundo (2do) numero: "));

while (numero1 < numero2) {
    numero1++;

    if (numero1%2 != 0) {
      console.log("El "+numero1+" es impar");
      document.write("El "+numero1+" es impar"+"<br/>");
    }
}

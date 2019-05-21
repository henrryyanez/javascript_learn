'use script'

// funciones
/*
Una función es una agrupación reutilizable de un conjunto
de instrucciones
*/

// Defino la funcion
function Calculadora(numero1, numero2){
  // Conjunto de instrucciones a Ejecutar
  console.log("Suma: " + (numero1+numero2));
  console.log("Resta: " + (numero1-numero2));
  console.log("multiplicación: " + (numero1*numero2));
  console.log("división: " + (numero1/numero2));
  console.log("************************************");

  // return "Hola soy la Calculadora!!";
}

// Invocar o llamar a la funcion
Calculadora(12, 8);
Calculadora(98, 2);

for (var i = 1; i <= 10; i++) {
  console.log(i);
  Calculadora(i, 8);
}

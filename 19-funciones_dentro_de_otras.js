'use script'

// funciones
/*
Una función es una agrupación reutilizable de un conjunto
de instrucciones
*/

function porConsola(numero1, numero2){
  console.log("Suma: " + (numero1+numero2));
  console.log("Resta: " + (numero1-numero2));
  console.log("multiplicación: " + (numero1*numero2));
  console.log("división: " + (numero1/numero2));
  console.log("************************************");
}

function porPantalla(numero1, numero2){
  document.write("Suma: " + (numero1+numero2)+"<br/>");
  document.write("Resta: " + (numero1-numero2)+"<br/>");
  document.write("multiplicación: " + (numero1*numero2)+"<br/>");
  document.write("división: " + (numero1/numero2)+"<br/>");
  document.write("************************************"+"<br/>");
}

function Calculadora(numero1, numero2, mostrar = false){

  if (mostrar == false) {
      porConsola(numero1, numero2);
  }else {
      porPantalla(numero1, numero2);
  }

  return true;

}

Calculadora(1, 4);
Calculadora(4, 5, true);
Calculadora(8, 2, true);
Calculadora(20, 35, true);

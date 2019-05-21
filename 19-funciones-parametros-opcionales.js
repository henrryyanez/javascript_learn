'use script'

// funciones
/*
Una función es una agrupación reutilizable de un conjunto
de instrucciones
*/

// Defino la funcion con un parametro opcional delimitado como false
function Calculadora(numero1, numero2, mostrar = false){
  // Conjunto de instrucciones a Ejecutar

  if (mostrar == false) {
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("multiplicación: " + (numero1*numero2));
    console.log("división: " + (numero1/numero2));
    console.log("************************************");
    // return "Hola soy la Calculadora!!";
  }else {
    document.write("Suma: " + (numero1+numero2)+"<br/>");
    document.write("Resta: " + (numero1-numero2)+"<br/>");
    document.write("multiplicación: " + (numero1*numero2)+"<br/>");
    document.write("división: " + (numero1/numero2)+"<br/>");
    document.write("************************************"+"<br/>");
  }
}

// Invocar o llamar a la funcion
Calculadora(1, 4);
Calculadora(4, 5, true);
Calculadora(8, 2, true);

/* for (var i = 1; i <= 10; i++) {
  console.log(i);
  Calculadora(i, 8);
 }*/

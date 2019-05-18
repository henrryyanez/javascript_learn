'use strict'

// Bucle While

var year = 2018;

while (year <= 2051) {
  // Ejecute esto:
  console.log("Estamos en el año "+year);

  year++; 
  // Sino le colocamos el valor incremento entonces
  // el while será infinito y colgará el navegador
  // por eso aumentamos year de uno en uno hasta llegar
  // a su valor declarado
}

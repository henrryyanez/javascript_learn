'use strict'

var lenguajes = new Array("PHP", "Javascript", "C#", "Go", "C", "Python", "Pascal", "NodeJs")

document.write("<h1>Lenguajes de programación del 2019</h1>");

document.write("<ul>"); //Creo una lista

    for (var i = 0; i < lenguajes.length; i++) {
      document.write("<li>"+lenguajes[i]+"</li>");
    }

document.write("</ul>");

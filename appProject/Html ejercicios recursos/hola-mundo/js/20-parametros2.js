'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];
var ambientales = ["C4-300", "C2-190"];
listadoFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco");
listadoFrutas( ...ambientales, "Sandia", "Pera", "Melon", "Coco");
const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeSuma = "La cantidad de letras es "+cantidad;


const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();

const minMay = fraseMayusculas+ " " + fraseMinusculas;

alert(mensajeSuma + " "+ minMay);
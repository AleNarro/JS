//const titulo= "Hola Mundo";
//console.log(titulo);
//console.log("Primera Letra: " + titulo.charAt(0));
//console.log("Resto del Título: " + titulo.slice(1, titulo.length));

function titleFormat(texto) {

    const firstLetter = texto.charAt(0).toUpperCase();
    const restOfText = texto.slice(1).toLowerCase();
    const formattedText = firstLetter + restOfText;
    
    return formattedText;
}


console.log(titleFormat("hello world"));  
console.log(titleFormat("HELLO world"));  
console.log(titleFormat("HeLlO wORLd"));   
function stringIncludes(cadena1, cadena2) {
    return cadena2.includes(cadena1);
}

console.log(stringIncludes("he", "Hello"));
console.log(stringIncludes("he", "hello world"));
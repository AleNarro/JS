function palindrome(cadena) {
  
    const cadenaInvertida = cadena.split('').reverse().join('');

    return cadena === cadenaInvertida;
}


console.log(palindrome("hello")); 
console.log(palindrome("hannah"));
console.log(palindrome("level"));
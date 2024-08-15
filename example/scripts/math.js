function palindrome(numero) {
  
    const cadena = Math.abs(numero).toString();

    const cadenaInvertida = cadena.split('').reverse().join('');

    return cadena === cadenaInvertida;
}

    console.log(palindrome(Math.abs(5)));
    console.log(palindrome(Math.ceil(5.3)));
    console.log(palindrome(Math.floor(6.3)));
    console.log(palindrome(Math.round(5.1)));
    console.log(palindrome(Math.max(5,7,9)));
    console.log(palindrome(Math.min(5,10,11)));
    console.log(palindrome(Math.random()));
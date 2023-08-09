// Dada una palabra validar si es Palindromo
// es decir, que se lee de la misma forma
// al derecho y al reves
// Ejemplo: abcba

console.log('17 - Palindromo')

// const esPalindromo = ( palabra ) => {
//     // codigo
//     let palabraAlreves = ''
//     for( let i = palabra.length - 1; i >= 0; i-- ) {
//       palabraAlreves += palabra[i]
//     }  
//     // codigo
//     return palabraAlreves === palabra
// }

// const esPalindromo = ( palabra ) => {
    
//     const stringToArray = palabra.split('')
//     const arrayReverse  = stringToArray.reverse()
//     const arrayToString = arrayReverse.join('')
//     return ( arrayToString === palabra )
    
// }

const esPalindromo = ( palabra ) => palabra.split('').reverse().join('') === palabra

console.log(esPalindromo('hola')) // false
console.log(esPalindromo('ala')) // true
console.log(esPalindromo('abc')) // true
console.log(esPalindromo('abcba')) // true
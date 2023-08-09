// Crea un programa que determine si un 
// número ingresado por el usuario es par o impar.

let numero = +prompt('Dame un número');

console.log(`El número ${numero} es ${ (numero % 2 === 0) ? 'par' : 'impar' }` )



// if( numero % 2 === 0 ) {
    //     console.log('El número ' + numero + ' es par')
    // } else {
        //     console.log('El número ' + numero + ' es impar')
        // }
        
// console.log( numero % 2 === 0 ? `El número ${numero} es par` : `El número ${numero} es impar` )

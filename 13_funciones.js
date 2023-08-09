
// una funcion que valide si un numero es par o no
// regresa: true o false

function esPar( numero ) {
    let resultado = numero % 2 == 0
    return resultado
}
// function esMultiplo( numero, multiplo ) {
//     let resultado = numero % multiplo === 0
//     return resultado
// }
// function esMultiplo( numero, multiplo ) {
//     return numero % multiplo === 0
// }

// const esMultiplo = (numero, multiplo ) => {
//     return numero % multiplo === 0
// }

const esMultiplo = (numero, multiplo ) => numero % multiplo === 0


let numero = 132
let multiplo = 2

// if( esMultiplo( numero, multiplo) ) {
//     console.log( `${numero} es multiplo de ${multiplo}`)
// } else {
//     console.log( `${numero} NO es multiplo de ${multiplo}`)
// }

// console.log( 
//     esMultiplo( numero, multiplo) 
//     ? `${numero} es multiplo de ${multiplo}` 
//     : `${numero} NO es multiplo de ${multiplo}`
// )

console.log( `${numero} ${ esMultiplo( numero, multiplo) ? 'SI' : 'NO' } es multiplo de ${multiplo}`)
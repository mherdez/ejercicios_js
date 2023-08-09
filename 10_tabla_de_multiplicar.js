
// Calcular la tabla de multiplicar de N número

let numero = +prompt("Dame un número para mostrar su tabla")

// for( let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${numero} = ${i * numero}`)
// }

// let i = 1
// while( i <= 10) {
//     console.log(`${i} x ${numero} = ${i * numero}`)
//     i++
// }

let i = 1
do {
    console.log(`${i} x ${numero} = ${i * numero}`)
    i++
} while( i <= 10)
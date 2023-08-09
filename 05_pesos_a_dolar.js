
// Pedir una cantidad en pesos mexicanos para convertir a dolares
// 1 Peso equivale a 0.058 dolares
// 1 Dolar equivale a 17.23 pesos mexicanos

// Dame la cantidad de pesos a convertir. 20
// 20 pesos equivalen a ?? dolares

const DOLAR = 17.23
let pesos = +prompt('Dame la cantidad de pesos a convertir')

// let dolares = pesos * 0.058
let dolares = pesos / DOLAR

console.log(`${pesos} pesos equivalen a ${dolares.toFixed(2)} dolares`)
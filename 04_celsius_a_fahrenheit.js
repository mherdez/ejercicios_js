// Realiza un programa que convierta grados Celsius a Fahrenheit. 
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado.

// Grados centígrados = (grados Fahrenheit − 32) × 5/9. 
// Grados Fahrenheit = (grados centígrados × 9/5) + 32.

// let celsius = 33;

let celsius = +prompt("Dame los grados celsius")
let fahrenheit = (celsius * 9 / 5) + 32

console.log(`${celsius} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit`)

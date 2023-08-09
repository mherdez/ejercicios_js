// Calcular el factorial de 5
// 5 x 4 x 3 x 2 x 1
// 1 x 2 x 3 x 4 x 5

let numero = +prompt("Dame un número para calcular su factorial")

let factorial = 1;
for( let i = 1; i <= numero; i++) {
    // factorial = factorial * i
    factorial *= i
}
console.log(`El factorial de ${numero} es ${factorial}`)
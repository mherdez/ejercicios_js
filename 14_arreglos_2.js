
const arreglo = ['ana']

for(let i = 1; i <= 3; i++) {
    let nombre = prompt("dame un nombre")
    arreglo.unshift(nombre)
}

console.log( arreglo )
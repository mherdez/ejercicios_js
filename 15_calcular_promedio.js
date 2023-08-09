
// dada calificaciones calcular su promedio, parar cuando el valor sea negativo

let total = []
let c

do {
    c = +prompt("Dame la calificacion")
    if( c > 0 ) {
        total.push(c)
    }
} while ( c > 0 )

let suma_calif = 0
for ( calif of total) {
    suma_calif += calif
}

console.log(total)
console.log(`El promedio de las calificaciones es ${suma_calif / total.length}`)
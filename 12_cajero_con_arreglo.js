/*
// Dada una monto de dinero regresar la cantidad
// minima de billetes y monedas a entregar
// Denominaciones: 500, 200, 100, 50, 20, 10, 5, 2, 1

// 358 pesos
// 1 - 200
// 1 - 100
// 1 - 50
// 1 - 5
// 1 - 2
// 1 - 1

// 1200 pesos
// 2 - 500
// 1 - 200
*/
console.log('Cajero Automático')

function calculo( monto, denominacion ) {
    let efectivo = Math.trunc( monto / denominacion )
    residuo = monto % denominacion

    if( efectivo > 0 ) {
        console.log( `${efectivo} de ${denominacion}` )
    }

    return residuo
}

// let montoSolicitado = 358;
let monto = +prompt('Cantidad de dinero a entregar?');
let denominaciones = [500,200,100,50,20,10,5,2,1]

console.log(`El monto solicidado de ${monto} se entrega de la siguiente manera:`)

for( denominacion of denominaciones) {
    monto = calculo( monto, denominacion )
}

console.log(`Faltó por entregar ${monto}`)


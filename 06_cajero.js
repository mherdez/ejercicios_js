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
let residuo

console.log(`El monto solicidado de ${monto} se entrega de la siguiente manera:`)

monto = calculo( monto, 500 )
monto = calculo( monto, 200 )
monto = calculo( monto, 100 )
monto = calculo( monto, 50 )
monto = calculo( monto, 20 )
monto = calculo( monto, 10 )
monto = calculo( monto, 5 )
monto = calculo( monto, 2 )
monto = calculo( monto, 1 )

console.log(`Faltó por entregar ${monto}`)


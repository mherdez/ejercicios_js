
let numeros = [1,2,3,4,5]
let nombres = ['ana', 'pedro', 'jose'] 
let frutas  = ['🍓','🍌','🍐','🍊','🍇']

console.log('Lista de frutas')

// for
// for( let i = 0; i <= 3; i++) {
//     console.log( `${i+1} - ${frutas[i]}` )
// }

// for( let i = 0; i <= frutas.length - 1; i++) {
//     console.log( `${i+1} - ${frutas[i]}` )
// }

// for( let i = 0; i < frutas.length; i++) {
//     console.log( `${i+1} - ${frutas[i]}` )
// }

// for...in
// for(let indice in frutas) {
//     console.log( frutas[indice] )
// }

// for...of
for(let fruta of frutas) {
    console.log(fruta)
}

for(nombre of nombres) {
    console.log(nombre)
}


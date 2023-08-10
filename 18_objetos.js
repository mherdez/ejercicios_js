// Dada una lista de calificaciones, mostrar la asignatura con la calificacion mas alta
// esp - 90
// mat - 95
// ing - 100
// tec - 80

console.log('Objetos')

// const calificaciones = {
//     esp: 100,
//     mat: 90,
//     ing: 95, 
//     tec: 80
// }

const kardex = [
    {
        materia: 'Español',
        puntos: 100,
        semestre: 1
    },
    {
        materia: 'Matematicas',
        puntos: 90,
        semestre: 1
    },
    {
        materia: 'Biologia',
        puntos: 70,
        semestre: 1
    },
    {
        materia: 'Español 2',
        puntos: 80,
        semestre: 2
    }
]

kardex.forEach( item => {
    if( item.semestre === 1 ) {
        console.log(`La materia ${item.materia} tiene ${item.puntos} de calificacion`)
    }
} )

// console.log(`La materia ing tiene la calificacion mas alta con ${calificaciones.esp} puntos`)



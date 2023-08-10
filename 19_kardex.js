
/* kardex = [
  { 
    nombre:
    puntos:
  },
  { 
    nombre:
    puntos:
  },
  { 
    nombre:
    puntos:
  },
] */

console.log('Kardex')

// pedir un conjunto de nombre de materia y sus puntos, hasta que la materia sea "fin"

// const kardex = []

// let nombre, puntos;

// do {
//     nombre = prompt('Dame el nombre de una materia (fin para terminar)')
//     puntos = +prompt('Dame los puntos de la materia')

//     if( nombre !== 'fin' ) {
//         kardex.push(
//             {
//                 "nombre": nombre,
//                 "puntos": puntos
//             }
//          )
//     }
// } while( nombre !== 'fin' )

// console.log(kardex)


const alumnos = [
    {
        "nombre": 'Juan',
        "apellido": 'Martinez',
        "matricula": '1238895',
        "activo": false,
        "kardex": [
            {
                "materia": 'Fundamentos de programacion',
                "calif": 90,
                "semestre": 1
            },
            {
                "materia": 'Quimica',
                "calif": 80,
                "semestre": 1
            },
            {
                "materia": 'Matematicas 1',
                "calif": 80,
                "semestre": 1
            },
            {
                "materia": 'Prog Orientada a Objetos',
                "calif": 85,
                "semestre": 2
            },
            {
                "materia": 'Fisica',
                "calif": 75,
                "semestre": 2
            },
            {
                "materia": 'Matematicas discretas',
                "calif": 95,
                "semestre": 2
            },
        ]

    },
    {
        "nombre": 'Maria',
        "apellido": 'Lopez',
        "matricula": '00998895',
        "activo": true,
        "kardex": [
            {
                "materia": 'Fundamentos de programacion',
                "calif": 70,
                "semestre": 1
            },
            {
                "materia": 'Quimica',
                "calif": 70,
                "semestre": 1
            },
            {
                "materia": 'Matematicas 1',
                "calif": 70,
                "semestre": 1
            },
            {
                "materia": 'Prog Orientada a Objetos',
                "calif": 80,
                "semestre": 2
            },
            {
                "materia": 'Fisica',
                "calif": 80,
                "semestre": 2
            },
            {
                "materia": 'Matematicas discretas',
                "calif": 80,
                "semestre": 2
            },
        ]

    },
]

alumnos.forEach(alumno => {
    if (alumno.activo) {
        console.log('----------------')
        console.log('Nombre del alumno: ' + alumno.nombre)
        console.log('----------------')
        alumno.kardex.forEach(materia => {
            if (materia.semestre === 1) {
                console.log(`${materia.materia} - ${materia.calif}`)
            }
        })
    }
})
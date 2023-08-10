
const $app = document.querySelector('#app');
const alumnos = [
    {
        "nombre": 'Juan',
        "apellido": 'Martinez',
        "matricula": '1238895',
        "activo": false,
        "foto": 'https://randomuser.me/api/portraits/men/60.jpg',
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
        "activo": false,
        "foto": 'https://randomuser.me/api/portraits/women/88.jpg',
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
    {
        "nombre": 'Erik',
        "apellido": 'Estrada',
        "matricula": '54598895',
        "activo": true,
        "foto": 'https://randomuser.me/api/portraits/men/89.jpg',
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
    {
        "nombre": 'Karen',
        "apellido": 'Hernandez',
        "matricula": '00998895',
        "activo": true,
        "foto": 'https://randomuser.me/api/portraits/women/50.jpg',
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
    {
        "nombre": 'Patricia',
        "apellido": 'Aldana',
        "matricula": '00998895',
        "activo": false,
        "foto": 'https://randomuser.me/api/portraits/women/55.jpg',
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

let card = ''
const semestreView = 2;

alumnos.forEach(alumno => {
    if (!alumno.activo) {

        card += `<div class='card'>
    <div>
        <img src='${alumno.foto}' />
        <h3>${alumno.nombre} ${alumno.apellido}</h3>
    </div>
    <div class='calif'>
    <h3>Semestre ${semestreView}</h3>
        
    `
        alumno.kardex.forEach(materia => {
            if (materia.semestre === semestreView) {
                card += `
            <div class='calif_desc'>
            <p>${materia.materia}</p><p>${materia.calif}</p>
            </div>`
            }
        })
        card += `</div></div>`
    }
})

$app.innerHTML += card


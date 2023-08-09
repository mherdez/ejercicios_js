// se importa el arreglo "temas" desde temas.js

const $app = document.querySelector('#app')
const $lista  = document.createElement('ol')

for( tema of temas ) {
    const $li = document.createElement('li')
    $li.textContent = tema
    $lista.append($li)
}

$app.append($lista)
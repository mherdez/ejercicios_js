// Dado un arreglo de calificaciones, 
// encontrar la calificacion mayor
// calificaciones = [80,85,70,90,50,75]

console.log('16 - Calificaciones')


const califMayor = (arr) => arr.sort((a, b) => b - a)[0]

console.log( califMayor([80,85,100,70,90,50,75]) )
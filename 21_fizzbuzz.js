// Dada una lista de numeros, remplazar 
// Los multiplos de 3 con Fizz
// Los multiplos de 5 con Buzz
// Los multiplos de 3 y 5 con FizzBuzz
// Los multiplos de 7 con Plus
// Los multiplos de 3 y 7 con FizzPluz
// Los multiplos de 5 y 7 con BuzzPluz
// Los multiplos de 3, 5 y 7 con FizzBuzzPluz


// Ej. Lista del 1 al 100
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

console.log('FizzBuzz')

const fizzbuzz = ( n ) => {
    let x = ''
    if ( n % 3 === 0 ) x += 'fizz'
    if ( n % 5 === 0 ) x += 'buzz'
    if ( n % 7 === 0 ) x += 'pluzz'
    if ( n % 9 === 0 ) x += 'ultra'

    return x || n
    
}

for( let num = 1; num <= 100; num++) {
   console.log( `${num}: ${fizzbuzz(num)}` )
}
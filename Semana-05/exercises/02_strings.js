var a;
var b;

console.log ('A- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).');
a='academico';
a=a.toUpperCase();
console.log('A: ', a);

console.log ('B- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).');
b= a.substring(0,5);
console.log('B: ', b);

console.log ('C- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).');

b= a.substring(a.length-3,a.length);
console.log('B: ', b);

console.log ('D- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).');


console.log('B: ',a.substring(0,1).toUpperCase() +a.substring(1,(a.length)).toLowerCase());


console.log ('E- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).');
a='hello world';
b=a.indexOf(' ');
console.log('B: ', b);

console.log ('F- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).');
a='lorem ipsum';
var c= a.indexOf(' ');
b = a.substring(0,1).toUpperCase() + a.substring(1,c).toLowerCase() 
    + a.substring(c,c+2).toUpperCase() + a.substring(c+2,a.length).toLowerCase();
console.log('B: ', b);

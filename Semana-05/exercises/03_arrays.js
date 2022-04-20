console.log('A- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).');
var a;
a=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(a[4],' ', a[10]);

console.log('B- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).');
console.log('Show ', a.sort());

console.log('C- Agregar un elemento al principio y al final del array (utilizar unshift y push).');

a.unshift('Firstbook');
a.push('Notebook');
console.log('Show ', a);

console.log('D- Quitar un elemento del principio y del final del array (utilizar shift y pop).');

a.shift();
a.pop();
console.log('Show ', a);

console.log('E- Invertir el orden del array (utilizar reverse).');

a.reverse();
console.log('Show ', a);

console.log('F- Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).');

console.log('Show ',a.join('-'));

console.log('G- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).');

a=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Show ', a.slice(4,11));
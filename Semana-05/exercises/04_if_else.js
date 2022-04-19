console.log(" Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.");
var a;
a=Math.random(1);
console.log('A: ', a);
if (a>=0.5){
    console.log('Greater than 0,5 ');
}else{
    console.log('Lower than 0,5 ');
}
console.log(" Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:");

var Age;
Age=60;

console.log(" “Bebe” si la edad es menor a 2 años;");

if (Age<2){
    console.log('Bebe: ', Age);
}
console.log(" “Niño” si la edad es entre 2 y 12 años;");
if (Age>=2 && Age <= 12){
    console.log('Niño: ', Age);
}

console.log(" “Adolescente” entre 13 y 19 años;");

if (Age>=13 && Age <= 19){
    console.log('Adolescente: ', Age);
}

console.log(" “Joven” entre 20 y 30 años;");

if (Age>=20 && Age <= 30){
    console.log('Joven: ', Age);
}

console.log(" “Adulto” entre 31 y 60 años;");

if (Age>=31 && Age <= 60){
    console.log('Adulto: ', Age);
}

console.log(" “Adulto mayor” entre 61 y 75 años;");

if (Age>=61 && Age <= 75){
    console.log('Adulto mayor: ', Age);
}

console.log(" “Anciano” si es mayor a 75 años.");

if (Age>75){
    console.log('Anciano: ', Age);
}
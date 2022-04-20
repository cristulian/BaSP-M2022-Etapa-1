console.log("Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.");
var c;
function suma(a,b){
    c = a + b;    
    return c;
}
console.log('El resultado es', suma(2,3));

console.log("A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.");

var c;
function suma(a,b) {
    if(isNaN(a) || isNaN(b)){
        alert(message= 'One parameter contains an error');
        return NaN;
    } else {
        return a+b;
    }
 }
  c = suma(5,'a');
  console.log(c);

console.log("Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.");

function v(n){
  if(Number.isInteger(n)){
      return true;
        } else {
          return false;
            }
}
console.log('N = 2 :', v(2));

console.log("A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).");

function suma(x,y){
    if(isNaN(x) || isNaN(y)){
      alert(message= 'One parameter contains an error');
      return NaN;
    } else if (!v(x) || !v(y)) {
        alert(message= 'Not Integer');
        x = Math.round(x);
        y = Math.round(y);
    }
    return x+y;
}
  console.log(suma(8,10.2))

console.log("Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.");

function m(n){
    if(!v(n)){
        alert(message= 'Not Integer')
        n = Math.round(n);
    }
    return  n;
}

function suma(x,y){
    if(isNaN(x) || isNaN(y)){
        alert(message= 'One parameter contains an error');
        return NaN;
    } else {
        return m(x)+ m(y);
    }
}
  console.log(suma(8,10.5));
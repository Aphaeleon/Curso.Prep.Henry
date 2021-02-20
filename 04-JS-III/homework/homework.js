// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return (array)[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let newArray = [];
  for(let a = 0; a < array.length; a++) {
    newArray[a] = array[a] + 1;
  }
  return newArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento;
  return array;
}

//Leo: decir que el elemento se agrega al final del arreglo es confuso.
//Pienso que es mejor omitir "al final" si solo se busca agregar el elemento
//sin importar su posicion en la matriz/arreglo.


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); {
  return array;
  }
}
//https://www.w3schools.com/js/js_array_methods.asp


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}
//https://www.w3schools.com/js/js_array_methods.asp


function arrayContiene(array, elemento) {
  // Comprueba si el elemento ex1iste dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var add = 0;
for (var x = 0; x < numeros.length; x++) {
  add = add + numeros[x];
}
return add;
}
//Leo: No me queda muy claro por qué se debe especificar una variable si
//lo que se quiere es la suma de los enteros dentro del arreglo.


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
return agregarNumeros(resultadosTest) / resultadosTest.length;
}

//Leo: por qué dicen iterar para regresar un promedio que un simple calculo matematico?
//Para promediar no hay que iterar. SumaResultadosTests / TotaldeTests
//Tuve que revisar la solucion de este ejercicio porque no sabia que la variable
//"agregarNumeros" estaba definida ni mucho menos que se podia utilizar.


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0];
  for(var x = 1; x < numeros.length; x++) {
    if (numeros[x] > max) {
      max = numeros[x];
  }
}
  return max;
}
//Leo: Este ejercicio no lo entendi. Hay variables que se desconocen o no se
//donde buscarlas por no estan a la vista.


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) { return 0; }
  var product = 1;
  for (var x = 0; x < arguments.length; x++) {
    product = product * arguments[x];
  }
return product;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
let count = 0;
for (let a = 0; a < arreglo.length; a++) {
  if (arreglo[a] > 18) {
    count++ }
}
return count
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
if (numeroDeDia === 7 || numeroDeDia === 1) {
  return "Es fin de semana"; 
} else {
  return "Es dia Laboral";
}
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
let num = n.toString()
if (num.charAt(0) === "9") {
  return true
} else {
  return false }
}
//Leo: https://www.w3schools.com/jsref/jsref_charat.asp
//Por qué habria que cambiar el numero a string? Cual es la razon?
//Por qué no dejarlo como numero? Cual es la diferencia al momento de identificar el tipo de variable?

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
    for (var i = 0; i < arreglo.length - 1; i++) {
  if (arreglo[i] !== arreglo[i+1]) {
    return false
  } else { return true
  }
}
}
//Leo: https://www.w3schools.com/js/js_loop_for.asp
//Por qué dicen que se puede dejar la variable var i = 0 fuera del statement 1 (es opcional),
//cuando en realidad lo intenté y me arroja error? Estaba siguiendo el ejemplo de w3schools.

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var NewArray = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x] === "Enero" || array[x] === "Marzo" || array[x] === "Noviembre") {
      NewArray.push(array[x]);
    }
  } 
  if (NewArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else { return NewArray;
  }
}
//Leo: https://www.w3schools.com/jsref/jsref_push.asp
//This was a tough exercise to complete.

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var NewArray = [];
for (let x = 0; x < array.length; x++) {
  if (array[x] > 100) {
    NewArray.push(array[x]);
  }
}
return NewArray;
}

//Leo: https://www.w3schools.com/jsref/jsref_length_array.asp
//Traté de usar el "if else" pero no me daba el ejercicio.

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var array = [];
var add = numero;
for (var x = 0; x < 10; x++) {
  add = add + 2;
  if (add === x) break;
  else {
    array.push(add);
  }
}
if (x < 10) {
  return "Se interrumpió la ejecución";
}
else { 
    return array; 
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

var array = [];
var add = numero;
for (var x = 0; x < 10; x++) {
  if (x === 5) { continue;
    } else {
      add = add + 2;
      array.push(add);
    }
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

//RESPUESTA PREGUNTA 2   (OPERACIONES MATEMÁTICAS CON DOS NROS ELEGIDOS POR USUARIO)
/*
var num_1 = +(prompt("ingresa un valor para num_1, mayor y distinto a 0"));
var num_2 = +(prompt("ingresa un valor para num_2, mayor y distinto a 0"));

console.log(num_1);
console.log(num_2);

var sumar = num_1 + num_2;
console.log("Sumamos ambos números y el total es = " + sumar);

var resta = num_1 - num_2;
console.log("Restamos ambos números y el resultado es: " + resta);

var multiplicar = num_1 * num_2;
console.log("Multiplicamos ambos números y el resultado es = " + multiplicar.toFixed(2));

var dividir = num_1 / num_2;
console.log("Dividimos ambos números y el resultado es = " + dividir.toFixed(2));

var modulo = num_1 % num_2;;
console.log("El módulo de ambos números es = " + modulo);


//RESPUESTA PREGUNTA 3  (CONVERTIR GRADOS CELSIUS A GRADOS FARENHEIT Y GRADOS KELVIN)


var celsius = +(prompt("Ingresa temperatura en grados Celsius "));

//Para convertirlos a Kelvin  0 °C + 273.15 = 273.15 K°
var kelvin = celsius + 273.15;
console.log(celsius + "°" + " Celsius convertidos a Kelvin son " + kelvin + "° Kelvin");

//Para convertirlos a Ferenheit   (0 °C × 9/5) + 32 = 32 °F
var farenheit = (celsius * 9/5) + 32;
console.log(celsius + "°" + " Celsius convertidos a Farenheit son " + farenheit + "° Farenheit"); 


//RESPUESTA PREGUNTA 4  (CALCULANDO DÍAS, SEMANAS Y AÑOS)

var respuesta = +(prompt("¿Cuántos días quieres que calculemos?"));

var day = respuesta;
var week = (respuesta / 7);
var year = (respuesta / 365);


console.log("Esa cantidad de días, " + day + ", es igual a " + Math.floor(week) + " semanas y en años es igual a " + year.toFixed(1));


//RESPUESTA PREGUNTA 5   (PIDE 5 NROS AL USUARIO, SÚMALOS Y PROMEDIALOS)

var num_1 = +(prompt("ingresa un valor para A"));
var num_2 = +(prompt("ingresa un valor para B"));
var num_3 = +(prompt("ingresa un valor para C"));
var num_4 = +(prompt("ingresa un valor para D"));
var num_5 = +(prompt("ingresa un valor para E"));

var suma = num_1 + num_2 + num_3 + num_4 + num_5;
var promedio =( suma / 5);
console.log("Al sumarlos todos el total es " + suma);
console.log("Y su promedio es " + promedio);

*/
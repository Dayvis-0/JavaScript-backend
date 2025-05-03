/* Si escribes un programa en JS de varias lineas que declarae e inici una variable, se puede declarar una 
variable con var despues de inicar y seguira funcinando*/
//TODO Var
myName = "Dayvis";

function logName() { console.log(myName); }

logName();

/*Esto no funcionará al escribir lineas individuales en una consola de JS, solo cuando se ejecutan varias 
lineas de JS en un documento web*/
var myName;

//TODOLet

// myName1 = "Dayvis";

// function logName1 () { console.log(myName1) }

// logName1();

// let myName1; // Esto ocasiona error, debido a la elevacion 

// Cuando usas var, puedes declarar la misma variable tantas veces como desees, pero con let no
var myName = "Jose";
var myName = "Maria";

console.log(myName);

let myName1 = "Dayvis1";
// let myName1 = "Dayvis1"; // Lanza un error, se tiene que hacer lo siguiente en su lugar
myName1 = "Maria";

//TODO Actualizar una variable
/*Una vez que una variable se ha iniciado con un valor, puedes cambiar (o actualizar) ese valor 
simplemente dandole un valor diferente*/

myName1 = "jose";
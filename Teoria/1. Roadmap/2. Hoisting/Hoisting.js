/* Una de las ventajas de JS de colocar (ponerlas en memoria) las declaraciones de las funciones
antes de ejecutar cualquier otro segmento de código es que permite utiliza la funcion
antes de declararla en el código.*/

function catIsName (name) {
    const cat = document.getElementById("cat");
    cat.textContent = `The cat's name is: ${name}`;
}

// function catIsName (name) {
//     console.log("The cat's name is: " + name);
// }

// catIsName("holly"); 
// Esto está escrito de la manera que seria esperada para que funcione
// Ahora veamos que sucede cuando llamamos a la funcion antes de escribirla

catIsName1("Dumas");

function catIsName1 (name) {
    const cat1 = document.getElementById("cat1");
    cat1.textContent = `The cat's name is: ${name}`;
}
// Esto solo funciona con var, ya que el hoisting eleva la declaracion
var x = 5;

(function () {
    const hois = document.getElementById("other");
    const hois1 = document.getElementById("other1");
    hois.textContent = `Elevecion de una variable: x: ${x}`; // var x = 10; 
    var x = 10; // x = 10;
    hois1.textContent = `Elevecion de una variable: x: ${x}`; // var x = 10; 
}) ();

/* */
const other = document.getElementById("other2");
var x = 1;

other.textContent = `${x}  ${y}`;

var y = 2; 
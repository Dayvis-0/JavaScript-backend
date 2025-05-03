const inte = document.getElementById("inte");
const stri = document.getElementById("stri");
const bool = document.getElementById("bool");
const arr = document.getElementById("array");
const obj = document.getElementById("obje");
const consta = document.getElementById("const");

let numb = 1;
let text = "Hola esto es un mensaje de texto";
let iAmALive = true;
let myNameArray = ["Cris", "Bob", "Jin"];
let dog = { name: "Spot", breed: "Dalmatian"};
const nume = 100;

inte.textContent = `Numeros: ${numb}`;
stri.textContent = `Cadena de caracteres (Strings): ${text}`;
bool.textContent = `Booleanos true or false: ${iAmALive}`;
arr.textContent = `Arreglos: ${myNameArray[0]}`;
obj.textContent = `Objetos: ${dog.name}`;
consta.textContent = `Constantes: ${nume}`;
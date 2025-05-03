const out = document.getElementById("out");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");

const first = 'wes';
let second = 'bos';
var age = 100;

out.textContent = `first = ${first} | first = ${window.first}`;
out1.textContent = `second = ${second} | second = ${window.second}`;
out2.textContent = `age = ${age} | age = ${window.age}`;
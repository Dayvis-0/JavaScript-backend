const out = document.getElementById("out");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");

const age = 100;

function go() {
    const hair = 'blonde';
}

out.textContent = `variable: age = ${age}`;
out1.textContent = `funcion: hair = \${hair} - causa error`;

const ag1 = 200;

function go1() {
    out2.textContent = `ag1 declarada y iniciada afuera; ag1: = ${ag1}`;
}

go1();
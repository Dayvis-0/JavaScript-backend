const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const out3 = document.getElementById("out3");
const out4 = document.getElementById("out4");
const out5 = document.getElementById("out5");
const out6 = document.getElementById("out6");
const out7 = document.getElementById("out7");

if (1 == 1) {
    const cool1 = true;
    let cool2 = true;
    var cool = true;
}

out1.textContent = `const cool1 = \${cool1} - causa error`;
out2.textContent = `let cool1 = \${cool2} - causa error`;
out3.textContent = `var cool1 = ${cool}`;

let cool3;

if (2 == 2) {
    cool3 = true;
}

out4.textContent = `let cool3 afuera declarado: cool3 = ${cool3}`;

// Ejemplo en dos tipos de diferentes de ambitos
function isCool (name) {
    let cool4;

    if (name == "wes") {
        cool4 = true;
    }
    out5.textContent = `cool definido fuera y asignado dentro de if: cool4 = ${cool4}`;

    return cool4;
}

isCool("wes");

// Bucles
for (var i=0; i<10; i++){
    console.log(i);
}

out6.textContent = `var i=0: i = ${i}`;

const dog = 'snickers';

function logDog () {
    out7.textContent = `Dog = ${dog}`;
}

function go () {
    const dog = 'sunny';
    logDog();
}

go();
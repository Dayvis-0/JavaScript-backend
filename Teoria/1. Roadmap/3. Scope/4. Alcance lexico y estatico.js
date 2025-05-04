const out = document.getElementById("out");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");

const dog = 'snickers';

function logDog () {
    console.log(dog);
    out.textContent = `dog dentro de logDog: ${dog}`;
}

function go () {
    const dog = 'sunny';
    logDog();
}

logDog();
go();

const dog1 = 'snickers1';

function logDog1 (dog) {
    console.log(dog);
    out1.textContent = `dog de logDog1: ${dog}`;
}

function go1 () {
    const dog1 = 'sunny1';
    logDog1('Rufus');
}

go1();

function sayHi(name) {
    function yell () {
        out2.textContent = `name desde yell: ${name.toUpperCase()}`;
    }

    yell();
}

sayHi("wes");
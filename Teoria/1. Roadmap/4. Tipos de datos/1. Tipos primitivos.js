// Number
const out = document.getElementById("out");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const out3 = document.getElementById("out3");
const out4 = document.getElementById("out4");
const out5 = document.getElementById("out5");
const out6 = document.getElementById("out6");
const out7 = document.getElementById("out7");
// Biging
const out8 = document.getElementById("out8");
const out9 = document.getElementById("out9");
// String 
const out10 = document.getElementById("out10");
const out11 = document.getElementById("out11");
const out12 = document.getElementById("out12");
const out13 = document.getElementById("out13");
const out14 = document.getElementById("out14");
// Boolean
const out15 = document.getElementById("out15");
const out16 = document.getElementById("out16");
const out17 = document.getElementById("out17");
const out18 = document.getElementById("out18");
const out19 = document.getElementById("out19");
const out20 = document.getElementById("out20");
const out21 = document.getElementById("out21");
// Symbol

// Number
let a_int = 1;
let a_flo = 1.2;
let a_inf = 2/0;
let a_inf_1 = 2/-0;
let a_nan = NaN;
let a_nan1 = 0 / 0;
let a_nan2 = Math.sqrt(-1);
let a_nan3 = parseInt("abc");
// BigInt
const a_big = 9007199254740991n;
const a_big1 = BigInt(12312312312312312);
// String
const a_str = "Hola aaaaaaaaaaaaaaaaaaaaaa";
const a_str1 = new String("Un objeto String");
const a = "a";
const b = "b";
// Boolean
const a_bol = true;
const a_bol1 = false;
const a_bol2 = new Boolean("hola");
const a_bol3 = new Boolean();
const a_bol4 = new Boolean(0);
const a_bol5 = new Boolean(false);

// Number
out.textContent = `Un entero: ${a_int} , tipo: ${typeof a_int}`;
out1.textContent = `Un flotante: ${a_flo} , tipo: ${typeof a_flo}`;
out2.textContent = `Un +infinity: ${a_inf} , tipo: ${typeof a_inf}`;
out3.textContent = `Un -infinity: ${a_inf_1} , tipo: ${typeof a_inf_1}`;
out4.textContent = `Un NaN - NaN: ${a_nan} , tipo: ${typeof a_nan}`;
out5.textContent = `Un NaN - 0/0: ${a_nan1} , tipo: ${typeof a_nan1}`;
out6.textContent = `Un NaN - raiz(-1): ${a_nan2} , tipo: ${typeof a_nan2}`;
out7.textContent = `Un NaN - parseInt("abc"):  ${a_nan3} , tipo: ${typeof a_nan3}`;
// BigInt
out8.textContent = `Un BigInt- con un n al final: ${a_big} , tipo: ${typeof a_big}`;
out9.textContent = `Un BigInt - con BigInt(): ${a_big1} , tipo: ${typeof a_big1}`;
// String 
out10.textContent = `Un String: ${a_str} , tipo: ${typeof a_str}`;
out11.textContent = `Un String creado de una clase new String(): ${a_str1} , tipo: ${typeof a_str1}`;
out12.textContent = `Acceder con charAt(0): ${a_str.charAt(0)}`;
out13.textContent = `Acceder con a_str[0]: ${a_str[0]}`;
out14.textContent = `Comparar con menor "a" < "b": ${a < b}`;
// Boolean
out15.textContent = `Boolean true: ${a_bol} , tipo: ${typeof a_bol}`;
out16.textContent = `Boolean false: ${a_bol1} , tipo: ${typeof a_bol1}`;
out17.textContent = `Object boolean new Boolean("hola"): ${a_bol2} , tipo: ${typeof a_bol2}`;
out18.textContent = `Object boolean new Boolean(): ${a_bol3} , tipo: ${typeof a_bol3}`;
out19.textContent = `Object boolean new Boolean(0): ${a_bol4} , tipo: ${typeof a_bol4}`;
out20.textContent = `Object boolean new Boolean(false) sin condicinal: ${a_bol5} , tipo: ${typeof a_bol5}`;
if (a_bol5){
    out21.textContent = `Object boolean new Boolean(false) con condicinal: se ejecuto el condicional`;
}
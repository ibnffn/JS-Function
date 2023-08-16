// JS FUNCTION - call
function greet() {
  console.log("Hello World");
}
greet();
// result
// Hello World

// call function - callgreeting
function greets() {
  console.log("Hello,world");
}
function welcome() {
  console.log("welcome to js function");
}
function callgreeting() {
  greets();
  welcome();
}
callgreeting();
// result
// Hello,world
// welcome to js function

// js function with parameter - perhatikan argumen pada console.log
function showMessage(form, text) {
  console.log(form + ": " + text);
}
showMessage("andi", "halo!");
showMessage("budi", "apa kabar?");
// result
// andi: halo!
// budi: apa kabar?

// jika yang dipanggil dari argumen hanya 1 dan 1 lagi tidak dipanggil,
// maka hasilnya undefined
function showMessages(from, txt) {
  console.log(from + ":" + txt);
}
showMessages(`andi`);
// result
// andi:undefined

// JS function - DEFAULT Value
function messageShow(from, text = "apa kabar?") {
  console.log(from + ": " + text);
}
messageShow("andi");
messageShow("budi", "baik");
// result
// andi: apa kabar?
// budi: baik

//JS Function - Return Value
function addNumber(a, b) {
  return a + b;
}
let result = addNumber(10, 15);
console.log(result);
// result
// 25

//function Return value + condtional ifelse
function checkAge(age) {
  if (age >= 3) {
    return true;
  } else {
    return false;
  }
}
let age = 18;
if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// result
// Access granted

// return value hanya menggunakan - return saja maka =

function showJob(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("ini list job");
}
// keterangan = jika let pada fungsi di atas dibawah 18 maka pada fungsi ini tidak akan menampilkan apa apa / tidak me return

//! Init Variable
let displayResult = document.getElementById("windowDisplay");
let btnDelete = document.getElementById("btn-delete");
let btnNum1 = document.getElementById("btn-1");
let btnNum2 = document.getElementById("btn-2");
let btnNum3 = document.getElementById("btn-3");
let btnNum4 = document.getElementById("btn-4");
let btnNum5 = document.getElementById("btn-5");
let btnNum6 = document.getElementById("btn-6");
let btnNum7 = document.getElementById("btn-7");
let btnNum8 = document.getElementById("btn-8");
let btnNum9 = document.getElementById("btn-9");
let btnNum0 = document.getElementById("btn-0");

let btnPlus = document.getElementById("btn-plus");
let btnMinus = document.getElementById("btn-minus");
let btnMultiply = document.getElementById("btn-multiply");
let btnDivision = document.getElementById("btn-div");

let btnEqual = document.getElementById("btn-equal");
let result;

let nilaiA;
let nilaiB = 0;

//! Clear Main Display 
btnDelete.addEventListener("click", ()=>{
  displayResult.innerHTML = "";
})

//! Show to Main Display
btnNum0.addEventListener("click", ()=>{
  displayResult.innerHTML += "0";
})

btnNum1.addEventListener("click", ()=>{
  displayResult.innerHTML += "1";
})

btnNum2.addEventListener("click", ()=>{
  displayResult.innerHTML += "2";
})

btnNum3.addEventListener("click", ()=>{
  displayResult.innerHTML += "3";
})

btnNum4.addEventListener("click", ()=>{
  displayResult.innerHTML += "4";
})

btnNum5.addEventListener("click", ()=>{
  displayResult.innerHTML += "5";
})

btnNum6.addEventListener("click", ()=>{
  displayResult.innerHTML += "6";
})

btnNum7.addEventListener("click", ()=>{
  displayResult.innerHTML += "7";
})

btnNum8.addEventListener("click", ()=>{
  displayResult.innerHTML += "8";
})

btnNum9.addEventListener("click", ()=>{
  displayResult.innerHTML += "9";
})

btnPlus.addEventListener("click", ()=>{
  nilaiA = parseInt(displayResult.innerHTML);
  displayResult.innerHTML += "+";
})

btnMinus.addEventListener("click", ()=>{
  // displayResult.innerHTML += "-";
})

btnMultiply.addEventListener("click", ()=>{
  // displayResult.innerHTML += "x";
})

btnDivision.addEventListener("click", ()=>{
  // displayResult.innerHTML += "/";
})

//! Add Operational
btnEqual.addEventListener("click", ()=>{
  let calculateThis = displayResult.innerHTML;

  let indexOperand = calculateThis.indexOf("+", 0);

  nilaiB = parseInt(calculateThis.charAt(indexOperand+1));
  console.log("Nilai B = "+nilaiB);

  result = nilaiA + nilaiB;
  console.log(displayResult.innerHTML.length);
  displayResult.innerHTML = nilaiA+nilaiB;
})

// displayResult.innerHTML = "Ganti";
 


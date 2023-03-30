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

let btnPower2 = document.getElementById("btn-power2");
let btnModulo = document.getElementById("btn-modulo");
let btnPi = document.getElementById("btn-pi");

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
  displayResult.innerHTML += "+";
})

btnMinus.addEventListener("click", ()=>{
  displayResult.innerHTML += "-";
})

btnMultiply.addEventListener("click", ()=>{
  displayResult.innerHTML += "x";
})

btnDivision.addEventListener("click", ()=>{
  displayResult.innerHTML += "/";
})

btnPower2.addEventListener("click", ()=>{
  displayResult.innerHTML += "²";
})

btnModulo.addEventListener("click", ()=>{
  displayResult.innerHTML += " mod ";
})

btnPi.addEventListener("click", ()=>{
  displayResult.innerHTML += "π";
})

//! Add Operational
btnEqual.addEventListener("click", ()=>{
  let calculateThis = displayResult.innerHTML;

  // If empty, skip
  if(calculateThis == ""){
    console.log("nope by =");
  } else {
    let indexOperand = calculateThis.indexOf("+", 0);

    // Split string into operation and operands
    const raw = calculateThis.split(/(\+|\-|x|\/| mod )/);
    const operands = [];

    for(let i = 0; i < raw.length; i++) {
      // Filter all the operations 
      if(raw[i].match(/\d+/)) { 

        // Find if raw have power²
        if(raw[i].includes("²")){
          console.log("Ada kuadrat");
          let toPower2 = parseInt(raw[i]);
          toPower2 *= toPower2;
          operands.push(toPower2);
        } else if(raw[i].includes('π')){
          operands.push(22/7*(parseInt(raw[i])));
          console.log("Ada Pi");
        } else {
          operands.push(parseInt(raw[i]));
        }
      } else if(raw[i].includes('π')){ // Jika hanya ada Pi di Display
        operands.push(22/7);
      }
    }
    console.log("RAW = " + raw);
    console.log("Operands = " + operands);


    // Take the first value into results
    result = operands[0];
    let j = 1;
    for (let i = 1; i < operands.length; i++) {
      switch (raw[j]) {
        case "+":
          result += operands[i];
          break;
        case "-":
          result -= operands[i];
          break;
        case "x":
          result *= operands[i];
          break;
        case "/":
          result /= operands[i];
          break;
        case " mod ":
          result %= operands[i];
          break;
        default:
          console.log("Invalid operator");
      }
      // increment again to have the next valid operations
      j+=2;
    }
    displayResult.innerHTML = result;
  }
})

// displayResult.innerHTML = "Ganti";
 

//! Something Fun
let bg = document.getElementById("bgm");
function doSomethingFun(){
  bg.style.background = "url('img/keys-d.webp')";
  bg.style.backgroundSize = "cover";

}
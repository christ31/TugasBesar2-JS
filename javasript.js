//! Init Variable
let displayResult = document.getElementById("windowDisplay");
let displayResultC31 = document.getElementById("windowDisplay-c31");

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

let btnPoint = document.getElementById("btn-point");
let btnPercent = document.getElementById("btn-percentage");

let btnSqrt = document.getElementById("btn-sqrt");

let btnEqual = document.getElementById("btn-equal");
let result;

let nilaiA;
let nilaiB = 0;

let firstLoad = true;

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

btnPoint.addEventListener("click", ()=>{
  displayResult.innerHTML += ".";
})

btnPercent.addEventListener("click", ()=>{
  displayResult.innerHTML += "%";
})

btnSqrt.addEventListener("click", ()=>{
  displayResult.innerHTML += "√";
})

// TODO: Implement
// 1. Implement ()

// TODO: Squash Bug
// 1. No order of operation (PEMDAS) (Multiplication is calc based on the order)
// 2. Wrong calc with minus number (-2 + 5)

//! Add Operational
btnEqual.addEventListener("click", ()=>{
  let calculateThis = displayResult.innerHTML;

  // If empty, skip
  if(calculateThis == ""){
    console.log("nope by =");
  } else {
    // TODO: Check if there is operand in front of the number
    // TODO: imputing -3 + 5 will result in raw = "", -, 3, -, 5
    // TODO: number should be in front
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
        } else if(raw[i].includes('%')){
          operands.push(parseInt(raw[i])/100);
          console.log("Ada %");
        } else if(raw[i].includes('√')){
          operands.push(Math.sqrt(parseInt(raw[i].substring(1))));
          console.log("Wat √");
        } else {
          operands.push(parseFloat(raw[i]));
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
      console.log("start => " + result);
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

      console.log("Result = " + result);
    }
    displayResult.innerHTML = result;
  }
})

// ! Poyo
function deletePoi(){
  displayResult.innerHTML = displayResult.innerHTML.slice(0, -1); 
}


//! Something Fun
let bg = document.getElementById("bgm");
let indBg = 0;
let urlBg = "";

function doSomethingFun(){
  console.log(bg.style.background);
  
  if(indBg == 5){
    indBg = 0;
  } else {
    indBg += 1;
  }
  
  console.log("indBg :" + indBg);
  switch(indBg){
    case 0:
      urlBg = "url('img/design-is-rounded-rectangles-l.webp')";
      break;
    case 1:
      urlBg = "url('img/keys-d.webp')"; 
      break;
    case 2:
      urlBg = "url('img/pixels-d.webp')";
      break;
    case 3:
      urlBg = "url('img/pixels-l.webp')";
      break;
    case 4:
      urlBg = "url('img/symbolic-d.webp')";
      break;
    case 5:
      urlBg = "url('img/symbolic-l.webp')"
      break;
    default:
      urlBg = "url('img/design-is-rounded-rectangles-l.webp')";
      break;
  }

  console.log("urlBG = " + urlBg);
  bg.style.background = urlBg;

  // if(bg.style.background.includes("img/keys-d.webp")){
  //   console.log("hey");
  //   bg.style.background = "url('img/design-is-rounded-rectangles-l.webp')";
  // } else {
  //   bg.style.background = "url('img/keys-d.webp')";
  // }
  bg.style.backgroundSize = "cover";
  console.log("Final : " + bg.style.background);
}

let c31WindowsDesign = document.getElementById("c31-calc-window");
let progateWindowsDesign = document.getElementById("progate-calc-window");
progateWindowsDesign.style.display = "flex";

function toggleDesign(){
  if(progateWindowsDesign.style.display == "flex"){
    progateWindowsDesign.style.display = "none";
    c31WindowsDesign.style.display = "flex";
  } else {
    progateWindowsDesign.style.display = "flex";
    c31WindowsDesign.style.display = "none";
  }
}
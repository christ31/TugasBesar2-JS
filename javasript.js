//! Init Variable
let result;

//! Optimize
const btnNumeric = document.querySelectorAll(".btn-num");
const displayResultCls = document.querySelectorAll(".calc-display");

// What is num? object / button
btnNumeric.forEach((num) => {

  // Add eventListener to each button (num)

  // Syntax: element.addEventListener(event, function, useCapture);
  // event = syntax for addEventListener()
  // event is used like "click", "drag", "keydown", etc

  // but, event used below is for different kind of event;
  // its located inside function parameter, the second parameter from the syntax
  // event in this case is [object PointerEvent]
  // event.target is [object HTMLButtonElement]
  // event.target.value = 
  num.addEventListener("click", (event) => {
    displayResultCls[0].innerHTML += event.target.value;
    displayResultCls[1].innerHTML += event.target.value;
  })
})

//! Show to Main Display
// Btn Operation Loop
const btnOperation = document.querySelectorAll(".btn-op");

btnOperation.forEach((op) => {
  op.addEventListener("click", (event) => {
    displayResultCls[0].innerHTML += event.target.value;
    displayResultCls[1].innerHTML += event.target.value;
  })
})

//! Clear Main Display 
let btnDeleteCls = document.querySelectorAll(".btn-delete-cls");

btnDeleteCls.forEach((value) => {
  value.addEventListener("click", (event)=>{
    displayResultCls[0].innerHTML = "";
    displayResultCls[1].innerHTML = "";
  })
})

// TODO: Implement
// 1. Implement ()

// TODO: Squash Bug
// 1. No order of operation (PEMDAS) (Multiplication is calc based on the order)
// 2. Wrong calc with minus number (-2 + 5)

//! Add Operational
let btnEqualCls = document.querySelectorAll(".btn-equal");

btnEqualCls.forEach((value)=>{
  value.addEventListener("click", (event)=>{
    let displayResult = displayResultCls[0].innerHTML;
    let calculateThis = displayResult;

    // If empty, skip
    if(calculateThis == ""){
      console.log("Nothing to do...");
    } else {
      // TODO: Check if there is operand in front of the number
      // TODO: imputing -3 + 5 will result in raw = "", -, 3, -, 5
      // TODO: number should be in front
      // Split string into operation and operands
      const raw = calculateThis.split(/(\+|\-|x|\/| mod |\÷)/);
      const operands = [];

      for(let i = 0; i < raw.length; i++) {
        // Filter all the operations 
        if(raw[i].match(/\d+/)) { 

          // Find if raw have power²
          if(raw[i].includes("²")){
            let toPower2 = parseFloat(raw[i]);
            toPower2 *= toPower2;
            operands.push(toPower2);
          } else if(raw[i].includes('π')){
            operands.push(22/7*(parseFloat(raw[i])));
          } else if(raw[i].includes('%')){
            operands.push(parseFloat(raw[i])/100);
          } else if(raw[i].includes('√')){
            operands.push(Math.sqrt(parseFloat(raw[i].substring(1))));
          } else {
            operands.push(parseFloat(raw[i]));
          }
        } else if(raw[i].includes('π')){ // Jika hanya ada Pi di Display
          operands.push(22/7);
        }
      }
      // console.log("RAW = " + raw);
      // console.log("Operands = " + operands);


      // Take the first value into results
      result = operands[0];
      let j = 1;
      for (let i = 1; i < operands.length; i++) {
        // console.log("start => " + result);
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
          case "÷":
            result /= operands[i];
          default:
            console.log("Invalid operator");
        }
        // increment again to have the next valid operations
        j+=2;

        // console.log("Result = " + result);
      }

      // Tampilkan result
      displayResultCls[0].innerHTML = result;
      displayResultCls[1].innerHTML = result;
    }
  })
})


// ! Poyo
function deletePoi(){
  displayResultCls[0].innerHTML = displayResultCls[0].innerHTML.slice(0, -1);
  displayResultCls[1].innerHTML = displayResultCls[1].innerHTML.slice(0, -1);
}


//! Something Fun
let bg = document.getElementById("bgm");
let indBg = 0;
let urlBg = "";

function doSomethingFun(){
  // console.log(bg.style.background);
  
  if(indBg == 9){
    indBg = 0;
  } else {
    indBg += 1;
  }
  
  // console.log("indBg :" + indBg);
  switch(indBg){
    case 0:
      urlBg = "url('img/design-is-rounded-rectangles-l.webp')";
      break;
    case 1:
      urlBg = "url('img/design-is-rounded-rectangles-d.webp')"; 
      break;
    case 2:
      urlBg = "url('img/pixels-l.webp')";
      break;
    case 3:
      urlBg = "url('img/pixels-d.webp')";
      break;
    case 4:
      urlBg = "url('img/symbolic-l.webp')";
      break;
    case 5:
      urlBg = "url('img/symbolic-d.webp')"
      break;
    case 6:
      urlBg = "url('img/pills-l.webp')"
      break;
    case 7:
      urlBg = "url('img/pills-d.webp')"
      break;
    case 8:
      urlBg = "url('img/keys-l.webp')"
      break;
    case 9:
      urlBg = "url('img/keys-d.webp')"
      break;
    default:
      urlBg = "url('img/design-is-rounded-rectangles-l.webp')";
      break;
  }

  // console.log("urlBG = " + urlBg);
  bg.style.background = urlBg;

  // if(bg.style.background.includes("img/keys-d.webp")){
  //   console.log("hey");
  //   bg.style.background = "url('img/design-is-rounded-rectangles-l.webp')";
  // } else {
  //   bg.style.background = "url('img/keys-d.webp')";
  // }
  bg.style.backgroundSize = "cover";
  // console.log("Final : " + bg.style.background);
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
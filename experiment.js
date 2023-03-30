const str = "3 + 5"; // 25+5 = 30

const raw = str.split(/(\+|\-|x|\/| mod )/);
// operations = 5, +, 2, +, 1;

const operands = [];
console.log("RAW = " + raw);


for (let i = 0; i < raw.length; i++) {
  if (raw[i].match(/\d+/)) {
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
      console.log("Pushing...");
      operands.push(parseFloat(raw[i]));
    }
  } else if(raw[i].includes('π')){
    operands.push(22/7);
  }
}

let result = operands[0];
console.log("operands = " + operands);
console.log("raw = " + raw);

let j = 1;
for (let i = 1; i < operands.length; i++) {
  console.log("start = " + result);
  console.log(raw[j]);
  console.log(operands[i]);

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
  j += 2;

  console.log("result = " + result);
}

console.log("hasil = " + result);

console.log(8%10);

console.log(22/7);


const str = "5+2+1-4-3";

const raw = str.split(/(\+|\-|x|\/)/);
// operations = 5, +, 2, +, 1;

const operands = [];

for (let i = 0; i < raw.length; i++) {
  if (raw[i].match(/\d+/)) {
    operands.push(parseInt(raw[i]));
  }
}
// operands = 5,2,1

let result = operands[0];
console.log("operands = " + operands);
console.log("operation = " + raw);

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
    default:
      console.log("Invalid operator");
  }
  // increment again to have the next valid operations
  j += 2;

  console.log("result = " + result);
}

console.log("hasil = " + result);

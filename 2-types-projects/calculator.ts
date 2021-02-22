/**
 * Let's make a calculator
 */

type Type = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculator(type: Type, num1: number, num2: number): number {
  switch (type) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 -  num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 % num2;
    default:
      throw Error('unknown error');
  }
}

console.log(calculator('add', 1, 3)) // 4
console.log(calculator('substract', 3, 1)) // 2
console.log(calculator('multiply', 4, 2)) // 8
console.log(calculator('divide', 4, 2)) // 2
console.log(calculator('remainder', 5, 2)) // 1

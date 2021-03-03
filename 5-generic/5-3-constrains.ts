interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('Full time');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('Part Time');
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 return 하는 함수 X
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const sunny = new FullTimeEmployee();
const test = new PartTimeEmployee();
sunny.workFullTime();
test.workPartTime();

const sunnyAfterPay = pay(sunny);
const testAfterPay = pay(test);


const obj = {
  name: 'ssunny',
  age: 10,
};

// T라는 obj를 받을 수 있고, K는 obj 안에 들어있는 key의 타입
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // ssunny
console.log(getValue(obj, 'age')); // 10

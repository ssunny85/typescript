{
  // // javascript
  // function numAdd(num1, num2) {
  //   return num1 + num2;
  // }
  //
  // // typescript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  //
  // // javascript
  // function jsFetchNum(id) {
  //   // code..
  //   // code..
  //   // code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  //
  // // typescript
  // function fetchNum(id: string): Promise<number> {
  //   // code..
  //   // code..
  //   // code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('ssunny');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();
  printMessage('new message');

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((accumulator: number, currentValue: number) => accumulator + currentValue);
  }
  console.log(addNumbers(1, 2, 3, 4));
}
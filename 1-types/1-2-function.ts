{

  // javascript
  function numAdd(num1, num2) {
    return num1 + num2;
  }

  // typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // javascript
  function jsFetchNum(id) {
    // code..
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // typescript
  function fetchNum(id: string): Promise<number> {
    // code..
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

}
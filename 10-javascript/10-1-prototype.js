{
  /** javascript prototype
   * 추상화하다. 대략적으로 만들다.
   * 반복적으로 쓸 수 있도록 속성과 함수를 정의
   * 자바스크립트에서 객체지향 프로그래밍 상속을 하기 위해서 쓰인다
   * 코드를 재사용하기 위함
   */

  const x = {};
  const y = {};
  console.log(x); // 모든 object는 Object라는 프로토를 상속한다.
  console.log(y);
  console.log(x.toString());
  console.log(x.__proto__ === y.__proto__); // true

  const arr = [];
  console.log(arr);

  function CoffeeMachine(beans) {
    this.beans = beans;

    // instance member level (만들어지는 인스턴스마다 생성된다)
    /*this.makeCoffee = (shots) => {
      console.log('making..');
    }*/
  }

  // prototype member level
  CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making..');
  }

  const machine1 = new CoffeeMachine(10);
  const machine2 = new CoffeeMachine(20);
  console.log(machine1);
  console.log(machine2);
  machine1.makeCoffee();

  function LatteMachine(milk) {
    this.milk = milk;
  }

  LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
  const latteMachine = new LatteMachine(111);
  console.log(latteMachine);
  latteMachine.makeCoffee();
}

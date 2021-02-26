{
  /**
   * 상속
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 규약을 명시 === 명세서
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // CoffeeMaker interface를 구현하는 class
  class CoffeeMachine implements CoffeeMaker {
    private static COFFEE_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance level

    // 인스턴스를 만들때 항상 호출되는 함수
    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('커피콩이 충분하지 않아요!');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT) {
        throw new Error('커피콩이 충분하지 않아요!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up..');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, private serialNumber: string) {
      super(beans); // 자식클래스에서 constructor 생성자 함수를 사용해 다른 데이터를 더 받아올 경우 super()를 호출해서 부모클래스에 데이터를 넘겨준다
    }

    private steamMilk(): void {
      console.log('Steaming some milk...');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super 키워드를 사용해 부모클래스의 함수들을 호출/접근할 수 있다
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(100);
  const latteMachine = new CafeLatteMachine(100, 'aaaa');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}

{
  /**
   * 추상화: 캡슐화와 interface를 통해 추상화한다
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 규약을 명시 === 명세서
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // CoffeeMaker interface를 구현하는 class
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(100);
      this.machine.clean();
    }
  }

  const maker:CoffeeMachine = new CoffeeMachine(100);
  maker.fillCoffeeBeans(10);
  maker.makeCoffee(1);

  const maker2:CommercialCoffeeMaker = new CoffeeMachine(100); // interface로 타입을 제한하게되면 interface에 정의되어있는 행위들만 사용할 수 있다
  maker2.makeCoffee(2);
  maker2.fillCoffeeBeans(100);
  maker2.clean();

  // 동일한 오브젝트의 인스턴스일지라도 이 오브젝트는 두가지의 인터페이스를 구현하기 때문에 인터페이스에서 규약된 함수들만 접근이 가능하다
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}

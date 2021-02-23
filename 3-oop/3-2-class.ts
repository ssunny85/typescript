{
  /**
   * 객체지향적 프로그래밍
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static COFFEE_GRAMM_PER_SHOT = 7; // class level
    coffeeBeans: number = 0; // instance level

    // 인스턴스를 만들때 항상 호출되는 함수
    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.COFFEE_GRAMM_PER_SHOT) {
        throw new Error('커피콩이 충분하지 않아요!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.COFFEE_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(100);
  const maker2 = new CoffeeMaker(30);
  console.log(maker);
  console.log(maker2);
  console.log(maker.makeCoffee(1));
  console.log(maker2.makeCoffee(2));
}
{
  /**
   * 절차지향적 프로그래밍
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const COFFEE_GRAMM_PER_SHOT = 7;
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * COFFEE_GRAMM_PER_SHOT) {
      throw new Error('커피콩이 충분하지 않아요!');
    }
    coffeeBeans -= shots * COFFEE_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans = 3 * COFFEE_GRAMM_PER_SHOT;
  const coffee = makeCoffee(1);
  console.log(coffee);
}
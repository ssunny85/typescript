{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public -> 기본
  // private -> 외부에 공개되지 않음
  // protected -> 상속으로 자식 클래스에서만 접근 가능
  class CoffeeMaker {
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
    };

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
  maker.fillCoffeeBeans(10);

  // getter, setter(어떤 계산을 해야할 때)
  class User {
    // 함수형태로 사용하지만 접근할 때엔 멤버변수에 접근하는것처럼 실행
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('steve', 'jobs');
  console.log(user.fullName);
  // user.firstName = 'test';
  // console.log(user.fullName);
  user.age = 10;
}

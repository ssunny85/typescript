{
  function checkNotNullBad(arg: number | null): number { // 타입이 number만 가능
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullBad(123);
  console.log(result);

  function checkNotNullAnyBad(arg: any | null): any { // any타입으로 할 경우 타입 보장이 안됨
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result2 = checkNotNullAnyBad(123);
  console.log(result2);

  // generic을 이용하면 어느 타입이든 받을 수 있으며, 코딩할때 타입이 결정되기 때문에 타입을 보장 받을 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123); // 숫자타입으로 결정됨
  console.log(number);
  const boal: boolean = checkNotNull(true); // boolean 타입으로 결정됨
  console.log(boal);

}
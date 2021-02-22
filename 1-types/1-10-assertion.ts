{
  /**
   * Type Assertions: 타입을 100% 장담할 때! 강요할 때 사용
   * !: 옵션이 아니라 절대적으로 값이 있다는걸 확신할 경우 사용
   */

  function jsStrFunc(): any {
    return 'Hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // !: 옵션이 아니라 절대적으로 값이 있다는걸 확신할 경우 사용한다
  numbers!.push(2);
}
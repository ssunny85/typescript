{
  /**
   * Type Inference: 타입을 선언하지 않아도 할당된 값을 보고 타입을 추론한다
   */

  let text = 'Hello';
  text = 'Hi';

  function add(x: number, y: number) {
    return x + y;
  }
  add(1, 2); // 인자로 받은 숫자를 더해 return 하므로 add 함수가 number 타입이라는걸 추론할 수 있다
}
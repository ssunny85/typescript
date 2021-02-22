{
  /**
   * JavaScript
   * Primitive(원시타입): number, string, boolean, null, undefined, symbol, bigint
   * Object: function, array...
   */

  // number
  const num: number = -1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefind
  let name: undefined // 단독으로 undefined 이라고 사용 안함
  let age: number | undefined; // age에 값이 있거나 아직 값이 할당(결젱)되지않았을 때
  age = 1;
  age = undefined;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 단독으로 null 이라고 사용 안함
  let person2: string | null; // person2에 값이 있거나 없거나

  // void (아무것도 return 하지 않는 경우)
  function print(): void {
    console.log('print');
    return;
  }

  // never
  function throwError(message: string): never {
    // message -> server log
    throw new Error(message);
    // while (true) {}
  }

  // object (원시타입을 제외한 모든 object 타입 할당 가능) -> 가능한 사용하지 않는다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'test' });

  // any, unknown 타입은 사용하지 않는다.
}
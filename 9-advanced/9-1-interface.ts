{
  /** type vs interface
   * interface: 동일한 규격사항을 구현할 수 있다
   * type: 데이터를 담을 때 데이터의 타입을 결정
   */

  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object(type, interface 모두 object를 정의, 할당할 수 있다)
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class(type, interface 모두 class 구현 가능)
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends(type, interface 모두 Extends 가능)
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number }; // 인터섹션을 이용

  // only interface can be merged (같은 이름의 interface는 merge 가능 - type은 안됨)
  interface PositionInterface {
    z: number;
  }

  // type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  }
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}

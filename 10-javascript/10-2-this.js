
/** this
 * 호출하는 문맥에 딸라 달라질 수 있다.
 * const, let 키워드를 이용해서 변수를 선언하는 경우 선언한 변수는 window에 등록되지 않는다. -> undefined
 * 글로벌적으로 최상위에서 함수를 선언한 경우 window에 등록되기때문에 window.함수 로 접근이 가능하다.
 * var 키워드는 기본적으로 window에 등록이 된다. -> 사용X
 */

console.log(this); // window(브라우저상에서)

function simpleFunc() {
  console.log(this); // window
}
simpleFunc();
window.simpleFunc();

class Counter {
  count = 0;
  // increase = function() {
  //   console.log(this);
  // };
  increase = () => {
    console.log(this); // arrow function을 사용하면 선언될 당시의 스코프의 this를 유지한다.
  };
}

const counter = new Counter();
counter.increase(); // Counter
// const caller =  counter.increase;
const caller =  counter.increase.bind(counter); // bind를 이용해서 this를 연결해준다.
caller(); // undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob

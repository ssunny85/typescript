/** 모듈화
 * 1. 파일들간의 중복적으로 발생할 수 있는 이름 충돌 방지
 * 2. 서로의 코드를 분리함으로써 모듈성 높임
 * 3. 모듈간의 재사용성을 높임
 * 내보낼때 export
 * 가져올때 import:
 */

export default function add(a, b) {
  return a + b;
}

export function print() {
  console.log('print');
} // 한 파일에서 default는 한번만 선언할 수 있다

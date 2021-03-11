/**
 * export default로 가져온 모듈은 이름을 재정의 가능하고
 * export로만 가져온 경우 괄호를 사용해서 이름 그대로 가져온다. (이름을 변경하고 싶은 경우 as 키워드 사용)
 */
import add, { print } from './10-3-module';

console.log(add(1, 2));
print();

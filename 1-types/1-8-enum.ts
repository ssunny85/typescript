{
  /**
   * Enum: 여러가지의 관련된 상수 값들을 한곳에 모아서 정의할 수 있게 도와줌
   * TypeScript에서는 가능한한 사용하지 않는것이 좋다 -> union 타입을 이용
   */

  // Javascript
  const MAX_NUM = 3;
  const DAYS_ENUM = Object.freeze({
    'MONDAY': 0,
    'TUESDAY': 1,
    'WEDNESDAY': 2,
  });

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Wednesday;
  day = 10;
  console.log(day);

  const dayOfWeek: DaysOfWeek = 'Monday';
}
{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {} // readonly를 사용할 경우엔 string[] 형태로 사용

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['test', 12];
  console.log('student: ', student);
  console.log(student[0]); // test
  console.log(student[1]); // 12
  const [name, age] = student;
  console.log('name: ', name);
  console.log('age: ', age);
}
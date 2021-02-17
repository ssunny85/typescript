{
  /**
  * Type Aliases
  */
  type Text = string;
  const name: Text = 'test';
  const address: Text = '';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'test',
    age: 22,
  }

  /*
  * String Literal Types
  */
  type Name = 'name';
  let testName: Name = 'name';
}
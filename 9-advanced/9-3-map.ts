{
  /**
   * map type: 기존의 타입들을 이용해 다른 형태로 변환
   * [1, 2].map(item => item * item) // [1, 4]
   */

  type Video = {
    title: string;
    author: string;
    description: string;
  };

  /*
  type VideoOptional = {
    title?: string;
    author?: string;
    description?: string;
  }

  type VideoReadOnly = {
    readonly title?: string;
    readonly author?: string;
    readonly description?: string;
  }
  */

  // 어떠한 타입(T)도 받을 수 있는 Optional 타입이 있다. map type을 사용해 다른형태로 변환
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ...in
  };
  type VideoOptional = Optional<Video>;
  const videoOptional: VideoOptional = {
    title: 'hi',
  };

  type Animal = {
    name: string;
    age: number;
  }
  const animal: Optional<Animal> = {
    name: 'aa',
    age: 11,
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: '',
    author: null,
    description: '',
  };

}

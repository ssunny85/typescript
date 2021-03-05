// stack 구현(객체지향 프로그래밍)

interface Stack {
  readonly size: number; // 값을 변경할 수 없고 내부적으로 결정되는 값
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string; // 불변성을 위해 readonly 추가
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private head?: StackNode;
  private _size: number = 0; // 내부에서만 변경 가능한 멤버 변수로 변수명에 언더바를 붙여 내부에서만 사용한다는걸 명시
  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl();
stack.push('1');
stack.push('2');
stack.push('3');
while (stack.size !== 0) {
  console.log(stack.pop());
}
// stack.pop();

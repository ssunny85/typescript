{
  /**
  * Union Types: Or
  */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    }
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: '',
      }
    }
  }

  // printLoginState(state)
  // success -> 성공 body
  // fail -> 실패 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log('성공!');
    } else {
      console.log('실패!');
    }
  }
}
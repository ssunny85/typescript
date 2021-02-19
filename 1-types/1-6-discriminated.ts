{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success', // 상태별로 동일한 키를 갖음으로써 구분할 수 있게 한다
    response: {
      body: string;
    }
  };
  type FailState = {
    result: 'fail',
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: '',
      }
    }
  }

  // printLoginState(state)
  // success -> 성공 body
  // fail -> 실패 reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log('성공!');
    } else {
      console.log('실패!');
    }
  }
}
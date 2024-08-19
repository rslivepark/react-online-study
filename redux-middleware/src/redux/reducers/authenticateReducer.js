const initialState = {
  id: '',
  password: '',
  authenticate: false,
};

export default function authenticateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      console.log('login reducer');
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
}

// 로그인을 눌렀는데 action까지만 도달하고 리듀서에 오지 못함!! 왜??
//

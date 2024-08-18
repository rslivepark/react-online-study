let initialState = {
  count: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    case 'reset':
      return { ...state, count: 0 };
    default:
      return state;
  }

  // store는 return이 무조건 있어야 함 그래서 reducer에서 무조건 기본리턴 필요
}

/*
Optional >> Switch / If case
if (action.type === 'increment') {
      return { ...state, count: state.count + 1 };
}
return {...state}
*/

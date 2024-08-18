let initialState = {
  count: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      // 여러개의 state 값이 있는 경우 그대로 유지하고 count state만 변경한다는 뜻
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }

  // store는 return이 무조건 있어야 함 그래서 reducer에서 무조건 기본리턴 필요
}

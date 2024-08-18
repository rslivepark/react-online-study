import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count); // 함수를 매개변수로 받음
  const increase = () => {
    dispatch({ type: 'increment' }); // type is action's name
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default App;

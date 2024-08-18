import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from './components/Button';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count); // 함수를 매개변수로 받음
  const increase = (value) => {
    dispatch({
      type: 'increment',
      payload: value,
      // payload: { plus5: 5, plus10: 10, plus100: 100 },
    }); // type is action's name
    // payload: 함수 매개변수와 같은 존재
  };
  const decrease = (value) => {
    dispatch({
      type: 'decrement',
      payload: value,
      // payload: { minus5: 5, minus10: 10, minus100: 100 },
    }); // type is action's name
  };
  const reset = () => {
    dispatch({
      type: 'reset',
    });
  };

  return (
    <section>
      <h1>{count}</h1>
      <Button onClick={() => reset()} btnName={'Reset'} />
      <div>
        <Button onClick={() => increase(1)} btnName={'+1'} />
        <Button onClick={() => increase(5)} btnName={'+5'} />
        <Button onClick={() => increase(10)} btnName={'+10'} />
        <Button onClick={() => increase(100)} btnName={'+100'} />
      </div>
      <div>
        <Button onClick={() => decrease(1)} btnName={'-1'} />
        <Button onClick={() => decrease(5)} btnName={'-5'} />
        <Button onClick={() => decrease(10)} btnName={'-10'} />
        <Button onClick={() => decrease(100)} btnName={'-100'} />
      </div>
    </section>
  );
}

export default App;

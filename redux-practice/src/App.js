import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from './components/Button';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleAction = (type, value) => {
    dispatch({
      type,
      payload: value,
    });
  };

  const buttons = [
    { label: '+1', type: 'increment', value: 1 },
    { label: '+5', type: 'increment', value: 5 },
    { label: '+10', type: 'increment', value: 10 },
    { label: '+100', type: 'increment', value: 100 },
    { label: '-1', type: 'decrement', value: 1 },
    { label: '-5', type: 'decrement', value: 5 },
    { label: '-10', type: 'decrement', value: 10 },
    { label: '-100', type: 'decrement', value: 100 },
  ];

  return (
    <section>
      <h1>{count}</h1>
      <Button onClick={() => handleAction('reset')} btnName={'Reset'} />
      <div>
        {buttons.map((btn) => (
          <Button
            key={btn.label}
            onClick={() => handleAction(btn.type, btn.value)}
            btnName={btn.label}
          />
        ))}
      </div>
    </section>
  );
}

export default App;

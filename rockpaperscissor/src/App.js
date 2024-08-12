import { useState } from 'react';
import './App.css';
import Box from './components/Box';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png',
  },
  scissors: {
    name: 'Scissors',
    img: 'http://www.pngmart.com/files/1/Scissors-PNG-Pic.png',
  },
  paper: {
    name: 'Paper',
    img: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    console.log(userSelect);
  };
  return (
    <div>
      <div className='main'>
        <Box title='you' item={userSelect} />
        {/* <Box title='computer' /> */}
      </div>
      <div className='main'>
        <button onClick={() => play('scissors')}>✌️</button>
        <button onClick={() => play('rock')}>✊</button>
        <button onClick={() => play('paper')}>✋</button>
      </div>
    </div>
  );
}

export default App;

//1. 박스 2개(타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패 결과에 따라 테두리 색이 바뀐다

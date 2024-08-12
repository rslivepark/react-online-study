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
  const [computerSelelct, setComputerSelelct] = useState(null);
  const [result, setResult] = useState({ userResult: '', computerResult: '' });
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelelct(computerChoice);
    const userResult = judgement(choice[userChoice], computerChoice);
    const computerResult =
      userResult === 'Win' ? 'Lose' : userResult === 'Lose' ? 'Win' : 'Tie';
    setResult({ userResult: userResult, computerResult: computerResult });
  };
  const judgement = (user, computer) => {
    if (user.name === computer.name) return 'Tie';
    else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'Win' : 'Lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'Win' : 'Lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'Win' : 'Lose';
  };
  const randomChoice = () => {
    // 객체의 키값만 뽑아서 배열로 만들어주는 함수
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div>
      <div className='main'>
        <Box title='you' item={userSelect} result={result.userResult} />
        <Box
          title='computer'
          item={computerSelelct}
          result={result.computerResult}
        />
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

// 챌린지
// 승패 결과 보여주기
// 승패 UI 구분하기 (이기면 초록색, 지면 빨간색 테두리)

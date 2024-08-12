import React, { Component } from 'react';
import './App.css';
import BoxClass from './components/Box';

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

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: { userResult: '', computerResult: '' },
    };
  }

  play = (userChoice) => {
    const userSelection = choice[userChoice];
    this.setState({ userSelect: userSelection });

    const computerSelection = this.randomChoice();
    this.setState({ computerSelect: computerSelection });

    const userResult = this.judgement(userSelection, computerSelection);
    const computerResult =
      userResult === 'Win' ? 'Lose' : userResult === 'Lose' ? 'Win' : 'Tie';

    this.setState({
      result: { userResult: userResult, computerResult: computerResult },
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) return 'Tie';
    else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'Win' : 'Lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'Win' : 'Lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'Win' : 'Lose';
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const finalChoice = itemArray[randomItem];
    return choice[finalChoice];
  };

  render() {
    return (
      <div>
        <div className='main'>
          <BoxClass
            title='you'
            item={this.state.userSelect}
            result={this.state.result.userResult}
          />
          <BoxClass
            title='computer'
            item={this.state.computerSelect}
            result={this.state.result.computerResult}
          />
        </div>
        <div className='main'>
          <button onClick={() => this.play('scissors')}>✌️</button>
          <button onClick={() => this.play('rock')}>✊</button>
          <button onClick={() => this.play('paper')}>✋</button>
        </div>
      </div>
    );
  }
}

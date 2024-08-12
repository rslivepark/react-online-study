import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    const { title, item, result } = this.props;
    const imgSrc =
      this.props.item && this.props.item.img
        ? this.props.item.img
        : 'https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg';

    const boxClassName = `box ${
      this.props.result && this.props.result === 'Win'
        ? 'green'
        : this.props.result === 'Lose'
        ? 'red'
        : 'tie'
    }`;

    return (
      <div className={boxClassName}>
        <h1 className='box-title'>{this.props.title}</h1>
        <img className='item-img' src={imgSrc} alt='rocksicssorspaper' />
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}

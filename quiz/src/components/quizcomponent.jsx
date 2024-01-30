import React from 'react';
import { Link } from 'react-router-dom';
import './quiz.css';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      score: 0,
    };
  }

  handlePrev = () => {
    const { index } = this.state;
    const lastIndex = this.props.questions.length - 1;
    const newIndex = index === 0 ? lastIndex : index - 1;

    this.setState({ index: newIndex });
  };

  handleNext = () => {
    const { index } = this.state;
    const lastIndex = this.props.questions.length - 1;
    const newIndex = index === lastIndex ? 0 : index + 1;

    this.setState({ index: newIndex });
  };

  handleQuit = () => {
    if (window.confirm('Do you want to quit?')) {
      this.props.history.push('/');
    }
  };

  handleOptionClick = (selectedOption) => {
    const { index, score } = this.state;
    const current = this.props.questions[index];

    if (selectedOption === current.answer) {
      alert('Correct Answer!');
      this.setState({ score: score + 1 });
    } else {
      alert('Wrong Answer!');
    }
  };

  handleFinish = () => {
    this.props.history.push(`/result?score=${this.state.score}`);
  };

  render() {
    const { index } = this.state;
    const current = this.props.questions[index];

    return (
      <>
        <div className="Main">
          <h1 className='question'>Question</h1>
          <div className="Totalquestions">{index + 1} of {this.props.questions.length}</div>
          <p>{current.question}</p>

          <div className="options">
            <button className='option' onClick={() => this.handleOptionClick(current.optionA)}>
              {current.optionA}
            </button>
            <button className='option' onClick={() => this.handleOptionClick(current.optionB)}>
              {current.optionB}
            </button>
            <button className='option' onClick={() => this.handleOptionClick(current.optionC)}>
              {current.optionC}
            </button>
            <button className='option' onClick={() => this.handleOptionClick(current.optionD)}>
              {current.optionD}
            </button>
          </div>
          <div className="buttons">
            <button id='previous' className='button' onClick={this.handlePrev}>
              Prev
            </button>
            <button id='next' className='button' onClick={this.handleNext}>
              Next
            </button>
            <button id='quit' className='button' onClick={this.handleQuit}>
              Quit
            </button>
            <button><Link to={`/result?score=${this.state.score}`} className='button' id="finish">
              Finish
            </Link></button>
          </div>
        </div>
      </>
    );
  }
}

export default Quiz;
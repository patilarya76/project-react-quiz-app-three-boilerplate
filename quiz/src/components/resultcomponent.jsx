import React, { useState, useEffect } from 'react';
import questions from '../resuorces/quizQuestion.json'
import './result.css';

const Result = () => {
  // Initialize state for score
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simulate automatic score update after 2 seconds
    const timeoutId = setTimeout(() => {
      const newScore = Math.floor(Math.random() * 101); // Replace this with your actual logic
      setScore(newScore);
    }, 2000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once

  const correctAnswers = score;
  const incorrectAnswers = questions.length - correctAnswers;

  return (
    <>
      <h1>Result</h1>
      <div className="main">
        <h3 className='text'>You need more practice!</h3>
        <h1 className='Score'> Your score is {score}%</h1>
        <div className="info">
          <span>Total number of questions</span> <span>{questions.length}</span>
        </div>
        <div className="info">
          <span>Number of attempted questions</span> <span>{correctAnswers + incorrectAnswers}</span>
        </div>
        <div className="info">
          <span>Number of correct answers</span> <span>{correctAnswers}</span>
        </div>
        <div className="info">
          <span>Number of wrong answers</span> <span>{incorrectAnswers}</span>
        </div>
      </div>

      <div className="Buttons">
        <button id='play' onClick={() => window.location.reload()}>Play Again</button>
        <button id='back' onClick={() => window.location.assign('/')}>Back to Home</button>
      </div>
    </>
  );
};

export default Result;
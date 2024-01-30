
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <h1>Quiz App</h1>
          <Link to="/quiz">
            <button id="homeplay">Play</button>
          </Link>
        </div>
      </>
    );
  }
}
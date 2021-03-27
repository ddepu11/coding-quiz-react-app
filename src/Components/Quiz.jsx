import React from "react";
import { TiTick } from "react-icons/ti";

export default function Quiz() {
  return (
    <div className="quiz">
      <header className="header">
        <div className="questions">
          <p>Questions 6/10</p>
        </div>
        <div className="write_answere">
          <span>4</span>
        </div>
      </header>
      <section className="section">
        <div className="q">
          <span>Question 6</span>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        </div>
        <div className="options">
          <p>one two</p>
          <p>one two</p>
          <p>one two</p>
          <p>one two</p>
        </div>
      </section>
    </div>
  );
}

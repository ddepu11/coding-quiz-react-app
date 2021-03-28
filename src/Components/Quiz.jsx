import React from "react";
import { TiTick } from "react-icons/ti";
import { useGlobalContext } from "../context";

export default function Quiz() {
  const { quizes, currentQuestionIndex, nextQuestion } = useGlobalContext();
  const currentQuestion = quizes[currentQuestionIndex];

  const {
    question,
    answers: { answer_a, answer_b, answer_c, answer_d, answer_e, answer_f },
    correct_answers: {
      answer_a_correct,
      answer_b_correct,
      answer_c_correct,
      answer_d_correct,
      answer_e_correct,
      answer_f_correct,
    },
  } = currentQuestion;

  let currentQuiz = {
    question,
    answers: [answer_a, answer_b, answer_c, answer_d, answer_e, answer_f],
    correct_answers: [
      answer_a_correct,
      answer_b_correct,
      answer_c_correct,
      answer_d_correct,
      answer_e_correct,
      answer_f_correct,
    ],
  };

  console.log(currentQuiz);

  return (
    <div className="outer">
      <div className="quiz">
        <header className="header flex">
          <div className="questions">
            <p>
              Questions {currentQuestionIndex + 1}/{quizes.length}
            </p>
          </div>
          <div className="write_answere">
            <span>
              <TiTick className="tick" />4
            </span>
          </div>
        </header>
        <section className="section">
          <div className="q">
            <p>Question {currentQuestionIndex + 1}</p>
            <h3>{question}</h3>
          </div>
          <div className="options">
            {currentQuiz.answers.map((item, index) => {
              if (item) {
                return <button key={index}>{item}</button>;
              }
            })}
          </div>
        </section>
      </div>

      <button className="next_q" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

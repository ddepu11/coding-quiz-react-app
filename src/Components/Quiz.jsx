import React from "react";
import { TiTick } from "react-icons/ti";
import { useGlobalContext } from "../context";

export default function Quiz() {
  const {
    quizes,
    currentQuestionIndex,
    nextQuestion,
    currectAns,
    correctAnsweres,
  } = useGlobalContext();
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

  const isAnswereCorrect = (e) => {
    const { iscorrect } = e.target.dataset;

    // console.log(iscorrect === "true");

    if (iscorrect === "true") {
      currectAns();
    } else {
      nextQuestion();
    }
  };

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
              <TiTick className="tick" />
              {correctAnsweres}
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
                return (
                  <button
                    data-iscorrect={currentQuiz.correct_answers[index]}
                    onClick={isAnswereCorrect}
                    key={index}
                  >
                    {item}
                  </button>
                );
              } else {
                return "";
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

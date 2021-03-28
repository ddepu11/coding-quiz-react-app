import React from "react";
import { useGlobalContext } from "../context";

export default function Result() {
  const { restartQuiz, correctAnsweres, quizes } = useGlobalContext();

  const a = quizes.length / 100;
  const res = a * correctAnsweres;

  return (
    <div className="res_overlay flex">
      <div className="res">
        <h1>Congratulations!!</h1>
        <p>You have answered {res * 100}% questions correctly</p>
        <button onClick={restartQuiz} className="play_again">
          Play Again
        </button>
      </div>
    </div>
  );
}

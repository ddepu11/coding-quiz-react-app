import React from "react";
import { useGlobalContext } from "../context";

export default function Result() {
  const { restartQuiz } = useGlobalContext();
  return (
    <div className="res_overlay flex">
      <div className="res">
        <h1>Congratulations!!</h1>
        <p>You have answered 12% questions correctly</p>
        <button onClick={restartQuiz} className="play_again">
          Play Again
        </button>
      </div>
    </div>
  );
}

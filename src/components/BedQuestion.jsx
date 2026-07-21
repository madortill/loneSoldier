import React, { useEffect, useRef, useState } from "react";
import "../css/BedQuestion.css";

import BedSvg from "./BedSvg";

function BedQuestion({ question, answers, onComplete }) {
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const timeoutRef = useRef(null);

  const correctAnswersAmount = answers.filter(
    (answer) => answer.isCorrect
  ).length;

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleAnswer = (answer) => {
    const wasAlreadyAnswered =
      wrongAnswers.includes(answer.id) || correctAnswers.includes(answer.id);

    if (isLocked || wasAlreadyAnswered) return;

    if (!answer.isCorrect) {
      setWrongAnswers((previousAnswers) => [...previousAnswers, answer.id]);

      return;
    }

    const updatedCorrectAnswers = [...correctAnswers, answer.id];

    setCorrectAnswers(updatedCorrectAnswers);

    const foundAllCorrectAnswers =
      updatedCorrectAnswers.length === correctAnswersAmount;

    if (foundAllCorrectAnswers) {
      setIsLocked(true);

      timeoutRef.current = setTimeout(() => {
        onComplete?.();
      }, 1000);
    }
  };

  const getAnswerStatus = (answerId) => {
    if (correctAnswers.includes(answerId)) {
      return "correct";
    }

    if (wrongAnswers.includes(answerId)) {
      return "wrong";
    }

    return "default";
  };

  const getBlanketColor = (status) => {
    if (status === "correct") {
      return "#77C94F";
    }

    if (status === "wrong") {
      return "#D60000";
    }

    return "#FFB94D";
  };

  return (
    <div className="BedQuestion">
      <h1 className="title">{question}</h1>

      <div
        className={`BedQuestion-answers BedQuestion-answers--${answers.length}`}
      >
        {answers.map((answer) => {
          const status = getAnswerStatus(answer.id);
          const wasAnswered = status !== "default";

          return (
            <button
              type="button"
              key={answer.id}
              className={`BedQuestion-answer BedQuestion-answer--${status}`}
              onClick={() => handleAnswer(answer)}
              disabled={isLocked || wasAnswered}
            >
              <BedSvg
                blanketColor={getBlanketColor(status)}
                className="BedQuestion-bed"
              />

              <span className="BedQuestion-answer-text">{answer.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BedQuestion;

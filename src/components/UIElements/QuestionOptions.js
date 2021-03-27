import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";

import "./QuestionOptions.css";

const QuestionOption = ({
  type,
  correctAnswer,
  wrongAnswers,
  handleClick,
  currentIndex,
  completedList,
  setQuestionCompleted,
}) => {
  const [answersList, setAnswersList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "multiple") {
      if (!event.target[0].value || event.target[0].value === "") return;
      handleClick(event.target[0].value);
      setQuestionCompleted(
        currentIndex,
        event.target[0].value === correctAnswer
      );
    } else {
      if (!event.target[0].checked && !event.target[1].checked) return;
      const selectedAnswer = event.target[0].checked ? "True" : "False";
      handleClick(selectedAnswer);
      setQuestionCompleted(currentIndex, selectedAnswer === correctAnswer);
    }
  };

  const shuffleArray = useCallback((array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setAnswersList(array);
  }, []);

  useEffect(() => {
    if (type === "multiple") {
      let answersArray = [correctAnswer, ...wrongAnswers];
      shuffleArray(answersArray);
    }
  }, [correctAnswer, wrongAnswers, type]);

  if (type !== "multiple") {
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="options-bool">
          <label htmlFor={`${type}-${currentIndex}-true`}>True</label>
          <input
            name={`${type}-${currentIndex}`}
            id={`${type}-${currentIndex}-true`}
            type="radio"
          />
          <br />
          <label htmlFor={`${type}-${currentIndex}-false`}>False</label>
          <input
            name={`${type}-${currentIndex}`}
            id={`${type}-${currentIndex}-false`}
            type="radio"
          />
        </div>
        <Button
          disabled={
            completedList &&
            completedList.length > 0 &&
            currentIndex !== null &&
            completedList[currentIndex].isCompleted
          }
          inverse
          type="submit"
        >
          LOCK OPTION
        </Button>
      </form>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <select>
          {answersList.length > 0 &&
            answersList.map((answer, index) => (
              <option
                key={`answer-${index}`}
                value={answer}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ))}
        </select>
      </div>
      <Button
        disabled={
          completedList &&
          currentIndex !== null &&
          completedList.length > 0 &&
          completedList[currentIndex].isCompleted
        }
        inverse
        type="submit"
      >
        LOCK OPTION
      </Button>
    </form>
  );
};

export default QuestionOption;

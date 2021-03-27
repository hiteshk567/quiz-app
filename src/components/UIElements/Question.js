import React, { useState, useEffect } from "react";
import Card from "./Card";
// import QuestionOption from "./QuestionOptions";
import QuestionOption from "../../containers/QuestionOptionsContainer";

const Question = ({ question, updateScore, currentIndex }) => {
  const [messageStatus, setMessageStatus] = useState(null);

  const handleClick = (selectedAnswer) => {
    if (selectedAnswer === question.correct_answer) {
      setMessageStatus("Correct Answer");
      updateScore(true);
    } else {
      setMessageStatus("Wrong Answer");
    }
  };

  useEffect(() => {
    setMessageStatus(null);
  }, [question]);

  return (
    <>
      {question && (
        <Card>
          <h4 dangerouslySetInnerHTML={{ __html: question.question }} />
          <QuestionOption
            type={question.type}
            correctAnswer={question.correct_answer}
            wrongAnswers={question.incorrect_answers}
            handleClick={handleClick}
            currentIndex={currentIndex}
          />
          {messageStatus && (
            <p
              style={{
                color: messageStatus === "Correct Answer" ? "green" : "red",
              }}
            >
              {messageStatus}
            </p>
          )}
          {messageStatus === "Wrong Answer" && (
            <p>
              Right Answer:{" "}
              <span
                dangerouslySetInnerHTML={{ __html: question.correct_answer }}
              ></span>
            </p>
          )}
        </Card>
      )}
    </>
  );
};

export default Question;

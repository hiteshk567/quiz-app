import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Button from "../UIElements/Button";

import Card from "../UIElements/Card";
import Modal from "../../containers/ModalContainer";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import Question from "../UIElements/Question";

const SelectedCategory = ({
  getQuiz,
  quizInfo,
  updateScore,
  isLoading,
  completedList,
}) => {
  const categoryId = useParams().categoryId;
  const history = useHistory();
  const [currentQuiz, setCurrentQuiz] = useState({
    currentIndex: null,
    question: {},
  });

  useEffect(() => {
    const isQuizStarted = JSON.parse(localStorage.getItem("quizStarted"));
    if (!isQuizStarted) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    getQuiz(categoryId);
  }, [getQuiz, categoryId]);

  useEffect(() => {
    setCurrentQuiz({
      currentIndex: 0,
      question: quizInfo.questions.find((quiz, index) => index === 0),
    });
  }, [quizInfo]);

  const changeQuestion = (status, oldIndex) => {
    let newIndex = status === "dec" ? oldIndex - 1 : oldIndex + 1;
    setCurrentQuiz((prevVal) => {
      return {
        currentIndex: newIndex,
        question: quizInfo.questions.find((quiz, index) => index === newIndex),
      };
    });
  };

  console.log(completedList);

  return (
    <Card>
      {isLoading && <LoadingSpinner />}
      {!isLoading && currentQuiz && (
        <div>
          <h3>QUESTION {currentQuiz.currentIndex + 1}:</h3>
          {currentQuiz && currentQuiz.question && (
            <Question
              currentIndex={currentQuiz.currentIndex}
              question={currentQuiz.question}
              updateScore={updateScore}
            />
          )}
          <p>
            Answered Questions:{" "}
            {completedList
              ? completedList.reduce(
                  (accumulate, item) =>
                    item.isCompleted ? accumulate + 1 : accumulate,
                  0
                )
              : 0}
            /10
          </p>
          {currentQuiz.currentIndex === 9 && <Modal />}

          <div className="buttons">
            <Button
              type="button"
              onClick={() => changeQuestion("dec", currentQuiz.currentIndex)}
              disabled={currentQuiz.currentIndex === 0 ? true : false}
            >
              PREVIOUS
            </Button>
            <Button
              type="button"
              onClick={() => changeQuestion("inc", currentQuiz.currentIndex)}
              disabled={currentQuiz.currentIndex === 9 ? true : false}
            >
              NEXT
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SelectedCategory;

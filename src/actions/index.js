import * as ACTIONS from "../constants";

export const getCategories = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
  });
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  dispatch({
    type: ACTIONS.GET_CATEGORIES,
    payload: data.trivia_categories,
  });
  dispatch({
    type: ACTIONS.SET_LOADING,
  });
};

export const getQuiz = (id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
  });
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${id}`
  );
  const data = await response.json();
  const questionArray = data.results.map((item) => ({
    ...item,
    isCompleted: false,
  }));
  dispatch({
    type: ACTIONS.SET_QUIZ_INFO,
    payload: {
      categoryId: id,
      questions: questionArray,
    },
  });
  dispatch({
    type: ACTIONS.SET_LOADING,
  });
};

export const setUser = (name) => (dispatch) => {
  console.log(name);
  dispatch({
    type: ACTIONS.SET_USER_INFO,
    payload: name,
  });
};

export const updateScore = (answerStatus) => (dispatch) => {
  dispatch({
    type: ACTIONS.UPDATE_USER_SCORE,
    payload: answerStatus,
  });
};

export const setQuestionCompleted = (index, result) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_QUESTION_COMPLETED,
    payload: { index, result },
  });
};

export const setCompletedToDefault = () => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_COMPLETED_TO_DEFAULT,
  });
};

export const setUserInfoToDefault = () => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_USER_INFO_TO_DEFAULT,
  });
};

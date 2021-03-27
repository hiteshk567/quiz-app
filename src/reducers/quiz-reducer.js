import * as ACTIONS from "../constants";

export const quiz = (state = { categoryId: null, questions: [] }, action) => {
  switch (action.type) {
    case ACTIONS.SET_QUIZ_INFO:
      return {
        categoryId: action.payload.categoryId,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
};

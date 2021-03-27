import * as ACTIONS from "../constants";

export const user = (state = { name: "", score: 0 }, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_INFO:
      return { ...state, name: action.payload };
    case ACTIONS.UPDATE_USER_SCORE:
      return {
        ...state,
        score: action.payload ? state.score + 10 : state.score,
      };
    case ACTIONS.SET_USER_INFO_TO_DEFAULT:
      return { ...state, score: 0 };
    default:
      return state;
  }
};

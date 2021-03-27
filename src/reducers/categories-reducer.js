import * as ACTIONS from "../constants";

export const category = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

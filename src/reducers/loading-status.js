import * as ACTIONS from "../constants";

export const loading = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return !state;

    default:
      return state;
  }
};

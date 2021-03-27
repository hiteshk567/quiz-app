import * as ACTIONS from "../constants";

// export const completedList = (
//   state = new Array(10).fill(
//     Object.assign({}, { isCompleted: false, answered: "no" })
//   ),
//   action
// ) => {
//   switch (action.type) {
//     case ACTIONS.SET_QUESTION_COMPLETED:
//       const newArray = [...state];
//       newArray[action.payload] = true;
//       return newArray;
//     case ACTIONS.SET_COMPLETED_TO_DEFAULT:
//       return new Array(10).fill(false);

//     default:
//       return state;
//   }
// };

export const completedList = (
  state = new Array(10)
    .fill(null)
    .map(() => ({ isCompleted: false, answered: "no" })),
  action
) => {
  switch (action.type) {
    case ACTIONS.SET_QUESTION_COMPLETED:
      const newArray = [...state];
      newArray[action.payload.index].isCompleted = true;
      newArray[action.payload.index].answered =
        action.payload.result === true ? "true" : "false";
      return newArray;
    case ACTIONS.SET_COMPLETED_TO_DEFAULT:
      return new Array(10)
        .fill(null)
        .map(() => ({ isCompleted: false, answered: "no" }));

    default:
      return state;
  }
};

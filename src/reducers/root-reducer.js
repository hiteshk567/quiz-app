import { combineReducers } from "redux";
import { loading } from "./loading-status";
import { category } from "./categories-reducer";
import { quiz } from "./quiz-reducer";
import { user } from "./user-reducer";
import { completedList } from "./completed-reducer";

export const rootReducer = combineReducers({
  loading,
  category,
  quiz,
  user,
  completedList,
});

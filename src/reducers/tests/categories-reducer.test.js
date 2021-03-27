import { category } from "../categories-reducer";
import * as ACTIONS from "../../constants";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

it("should return the received categories", () => {
  let action = {
    type: ACTIONS.GET_CATEGORIES,
    payload: ["Entertainment", "Movie", "General Knowledge"],
  };

  expect(category(undefined, action)).toEqual([
    "Entertainment",
    "Movie",
    "General Knowledge",
  ]);
});

import { quiz } from "../quiz-reducer";
import * as ACTIONS from "../../constants";

describe("quiz reducer works in all scenarios", () => {
  it("should return the received categories", () => {
    let action = {
      type: ACTIONS.GET_CATEGORIES,
      payload: undefined,
    };

    expect(quiz(undefined, action)).toEqual({
      categoryId: null,
      questions: [],
    });
  });
});

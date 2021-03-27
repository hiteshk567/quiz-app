import { user } from "../user-reducer";
import * as ACTIONS from "../../constants";

describe("user reducer works in all dispatch actions", () => {
  it("should update the user score on correct answer", () => {
    let action = {
      type: ACTIONS.UPDATE_USER_SCORE,
      payload: true,
    };

    expect(
      user(
        {
          name: "Hitesh",
          score: 30,
        },
        action
      )
    ).toEqual({ name: "Hitesh", score: 40 });
  });

  it("should not update the user score on wrong answer", () => {
    let action = {
      type: ACTIONS.UPDATE_USER_SCORE,
      payload: false,
    };

    expect(
      user(
        {
          name: "Hitesh",
          score: 30,
        },
        action
      )
    ).toEqual({ name: "Hitesh", score: 30 });
  });

  it("should set the user name", () => {
    let action = {
      type: ACTIONS.SET_USER_INFO,
      payload: "Hitesh Kumar",
    };

    expect(
      user(
        {
          name: undefined,
          score: 0,
        },
        action
      )
    ).toEqual({ name: "Hitesh Kumar", score: 0 });
  });

  it("should reset the user info", () => {
    let action = {
      type: ACTIONS.SET_USER_INFO_TO_DEFAULT,
    };

    expect(
      user(
        {
          name: "Hitesh",
          score: 30,
        },
        action
      )
    ).toEqual({ name: "Hitesh", score: 0 });
  });
});

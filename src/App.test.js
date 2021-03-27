import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import App from "./containers/AppContainer";
import { applyMiddleware } from "redux";

let mockStore = configureStore([reduxThunk]);
let store;
let container = null;
beforeEach(() => {
  store = mockStore({
    loading: false,
    category: ["Gaming", "Sports", "General Knowledge"],
    quiz: [],
    user: { name: "Manish", score: 50 },
    completedList: null,
  });
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the app component without crash", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  );
});

it("matches the snapshot", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});

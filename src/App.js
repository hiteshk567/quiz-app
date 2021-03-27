import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./components/navigation/Header";
import "./App.css";
import LoadingSpinner from "./components/UIElements/LoadingSpinner";
const CategorySelection = React.lazy(() =>
  import("./containers/CategoryContainer")
);
const QuizContainer = React.lazy(() => import("./containers/QuizContainer"));
const Result = React.lazy(() => import("./containers/ResultContainer"));

function App({ fetchCategories }) {
  useEffect(() => {
    fetchCategories();
  }, []);

  const routes = (
    <Switch>
      <Route path="/" exact>
        <CategorySelection />
      </Route>
      <Route path="/category/:categoryId" exact>
        <QuizContainer />
      </Route>
      <Route path="/result" exact>
        <Result />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Suspense
            fallback={
              <div>
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </div>
  );
}

export default App;

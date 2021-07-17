import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalCon } from "./globalStyles";
import { Header, Main } from "./components/index";
import "../node_modules/highlight.js/styles/atom-one-dark.css";

const App = () => {
  return (
    <>
      <Router basename="code-editor">
        <Switch>
          <Route path="/" exact>
            <GlobalCon></GlobalCon>
            <Header></Header>
            <Main></Main>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

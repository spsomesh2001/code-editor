import React from "react";
import { GlobalCon } from "./globalStyles";
import { Header, Main } from "./components/index";
import "../node_modules/highlight.js/styles/atom-one-dark.css";

const App = () => {
  return (
    <>
      <GlobalCon></GlobalCon>
      <Header></Header>
      <Main></Main>
    </>
  );
};

export default App;
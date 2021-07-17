import { createGlobalStyle } from "styled-components";

export const GlobalCon = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #282c34;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #888;
  }
`
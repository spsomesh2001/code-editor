import styled from "styled-components";

export const CodeEdCon = styled.div`
  height: 100%;
  width: 42%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #497a7a;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CodeArea = styled.div`
  width: 95%;
  height: 96%;
  margin: auto 0;
  background-color: #282c34;
  border-radius: 5px;

  position: relative;
`;

export const InpCon = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 10px;

  position: absolute;
  top: 0;
  left: 0;

  color: transparent;
  caret-color: white;
  background: transparent;
  z-index: 2;
  border-radius: 5px;

  font-family: monospace;
  font-size: 16px;
  white-space: pre;
`;

export const SynHigh = styled.pre`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  border-radius: 5px;
`;

export const SynCode = styled.code`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: absolute;
  z-index: 1;
  font-size: 16px;
  border-radius: 5px;
  overflow: auto;
`;

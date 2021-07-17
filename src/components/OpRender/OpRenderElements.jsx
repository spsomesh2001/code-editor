import styled from "styled-components";

export const OpRenderCon = styled.div`
  height: 100%;
  width: 42%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #313d70;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export const OpIframe = styled.iframe`
  width: 95%;
  height: 95%;
  margin: auto 0;
  border: none;
  background-color: #f0eeee;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
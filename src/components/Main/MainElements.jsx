import styled from "styled-components";

export const MainCon = styled.div`
  height: 550px;
  min-height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #2f3233;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

// Elements used by child elements of Main Component.
export const SecHCon = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;

  @media screen and (max-width: 700px) {
    height: 15%;
    margin-bottom: 10px;
    justify-content: space-between;
  }
`

export const SecName = styled.h3`
  font-size: 1.4rem;
  color: white;
`

export const SecCon = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
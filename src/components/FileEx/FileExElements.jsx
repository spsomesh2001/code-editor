import styled from "styled-components";

export const FileExCon = styled.div`
  height: 100%;
  width: 15%;
  min-width: 180px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #021641;


  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const FileList = styled.ul`
  width: 100%;
  height: 96%;
  margin: auto 0;
  list-style: none;
`

export const File = styled.li`
  padding: 3px 0;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({s}) => s ? "#014232" : ""};
  color: ${({s}) => s ? "#fff" : "#fff"};
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #014232;
    transition: all 0.3s ease-out;
  }
`

export const FIcon = styled.img`
  height: ${({h}) => h ? "18px" : "20px"};
  margin-right: 10px;
`
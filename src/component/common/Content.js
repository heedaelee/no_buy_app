import styled from "styled-components";

//공통 컨텐츠 박스 들어 있음

//제목 컨텐츠

const backgroundColor = "#ffffff";
const borderRadius = "10px";

export const Content = styled.div`
  max-width: 400px;
  width: 80vw;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  h3 {
    color: #2962ff;
    margin: 0;
    padding: 0;
  }
`;

//리스트 컨텐츠
export const ListContent = styled.div`
  max-width: 400px;
  width: 80vw;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  display: flex;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  h3 {
    color: #2962ff;
    margin: 0;
    padding: 0;
  }
`;

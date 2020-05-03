import React from "react";
import styled from "styled-components";
import FormContainer from "container/FormContainer";
import { Content } from "component/common/Content";
import BrandListContainer from "container/BrandListContainer";

const Wrapper = styled.div`
width :99vw;
box-sizing: border-box;
display :flex;
align-items: center;
flex-flow column;
`;

const TextBlock = styled.div`
  padding: 10px;
`;

const MenuText = styled.h2`
  display: inline;
  position: relative;
  margin: 0px 2px;
  cursor: pointer;
  &:hover {
    color: #0984e3;
  }
`;
const Center = styled.h2`
  display: inline;
  margin: 0px 2px;
`;
const Underline = styled.div`
  width: 100%;
  height: 2px;
  left: 0px;
  top: 35px;
  position: absolute;
  background: #0984e3;
`;

const Header = styled.div``;

const Main = ({ page, onChangePage }) => (
  <Wrapper>
    <Content>
      <Header>
        <TextBlock>
          <MenuText onClick={() => onChangePage("list")}>
            조회
            {page === "list" && <Underline />}
          </MenuText>
          <Center>|</Center>
          <MenuText onClick={() => onChangePage("register")}>
            등록
            {page === "register" && <Underline />}
          </MenuText>
        </TextBlock>
      </Header>
    </Content>
    {page === "list" ? (
      <BrandListContainer />
    ) : (
      <Content>
        <FormContainer page={page} />
      </Content>
    )}
  </Wrapper>
);

export default Main;

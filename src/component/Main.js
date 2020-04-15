import React from "react";
import styled from "styled-components";
import FormContainer from "container/FormContainer";
import {Content} from "component/common/Content";
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
  margin: 0px 2px;
  cursor: pointer;
  &:hover {
    color: #0984e3;
  }
`;

const Header = styled.div``;

const Main = ({ page, onChangePage }) => (
  <Wrapper>
    <Content>
      <Header>
        <TextBlock>
          <MenuText onClick={() => onChangePage("list")}>조회</MenuText>
          <MenuText style={{ cursor: "" }}>|</MenuText>
          <MenuText onClick={() => onChangePage("register")}>등록</MenuText>
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

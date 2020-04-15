import React from "react";
import { ListContent } from "component/common/Content";
import styled from "styled-components";

const Title = styled.div`
  width: 40%;
  color:#2962ff;
  font-size:1.1rem;
  font-weight:800;
`
const Content = styled.div`
  width: 60%;
  text-align:center;
  
`

const Brand = ({ brand, index, clickHandle }) => (
  <ListContent onClick={() => clickHandle(index)}>
    <Title>
      {brand.title}
    </Title>
    <Content>
      {brand.content}
    </Content>
  </ListContent>
);

export default Brand;

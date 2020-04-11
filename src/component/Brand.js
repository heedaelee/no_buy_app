import React from "react";
import Content from "component/common/Content";

const style={cursor: "pointer"}

const Brand = ({ brand, index, clickHandle }) => (
  <Content  style={style} onClick={() => clickHandle(index)}>
    <h3>{brand.title}</h3>
    <p>{brand.content}</p>
  </Content>
);

export default Brand;

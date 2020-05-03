import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const commonFont = "'Cafe24Dangdanghae',sans-serif;";
const FormBlock = styled.div``;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0px 10px;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    fontFamily: commonFont,
  },
  h6: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    fontFamily: commonFont,
  },
}));

const Form = ({ onRemove, onSubmit, brand, page, goBack }) => {
  const classes = useStyles();
  let title;
  let content;

  if (page === "register") {
    let node_title = document.getElementsByName("title");
    for (let i = 0; i < node_title.length; ++i) {
      node_title[0].value = "";
    }

    let node_content = document.getElementsByName("content");
    for (let i = 0; i < node_content.length; ++i) {
      node_content[0].value = "";
    }
  }

  return (
    <FormBlock>
      <Typography className={classes.h6}>브랜드 입력</Typography>
      <TextField
        inputRef={(node) => {
          title = node;
        }}
        autoComplete="off"
        required
        id="title"
        name="title"
        label="불매할 브랜드를 입력하세요"
        fullWidth
        defaultValue={brand ? brand.title : ""}
      />
      {/* <ImageBlock>
        <Label>로고 이미지 등록</Label>
        <Wallpaper style={{ fontSize: "4rem" }} />
      </ImageBlock> */}
      <TextField
        id="content"
        name="content"
        label="등록 사유를 입력하세요"
        inputRef={(node) => {
          content = node;
        }}
        fullWidth
        autoComplete="off"
        defaultValue={brand ? brand.content : ""}
      />
      <Buttons>
        <Button onClick={goBack} className={classes.button}>
          취소
        </Button>
        {page === "editor" && (
          <Button onClick={onRemove} className={classes.button}>
            삭제
          </Button>
        )}
        <Button
          className={classes.button}
          onClick={() => onSubmit(title.value, content.value)}
          variant="contained"
          color="primary"
        >
          {page === "register" ? "등록" : "수정"}
        </Button>
      </Buttons>
    </FormBlock>
  );
};

export default Form;

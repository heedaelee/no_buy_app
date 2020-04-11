import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";


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
  },
  h6: {
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
}));

const Form = ({ onRemove, onSubmit, brand, page, goBack }) => {
  const classes = useStyles();
  let title;
  let content;

  return (
    <FormBlock>
      <Typography className={classes.h6}>브랜드 입력</Typography>
      <TextField
        inputRef={(node) => {
          title = node;
        }}
        autoComplete="off"
        required
        id="name"
        name="title"
        label="브랜드 명"
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
        label="등록 사유"
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

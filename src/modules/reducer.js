import { createAction, handleActions } from "redux-actions";

import produce from "immer";

const initialState = {
  selectedI: -1,
  page: "list",
  brands: [
    {
      id: 0,
      title: "브랜드 이름",
      content: "등록 사유",
      img: 0,
    },
  ],
};

//ACTION TYPE
const ADD_BRAND = "ADD_BRAND";
const UPDATE_BRAND = "UPDATE_BRAND";
const DELETE_BRAND = "DELETE_BRAND";
const CHANGE_PAGE = "CHANGE_PAGE";
const INITIAL = "INITIAL";
const SELECT_BRAND = "SELECT_BRAND";
const REMOVE_BRAND = "REMOVE_BRAND";

//액션 생성자
export const addBrand = createAction(ADD_BRAND); //brands. {}
export const removeBrand = createAction(REMOVE_BRAND); //brands []
export const updateBrand = createAction(UPDATE_BRAND); //brands. {}
export const deleteBrand = createAction(DELETE_BRAND); //id
export const changePage = createAction(CHANGE_PAGE); //page
export const initial = createAction(INITIAL);
export const selectBrand = createAction(SELECT_BRAND);

export default handleActions(
  {
    [ADD_BRAND]: (state, action) => {
      return produce(state, (draft) => {
        console.log(action.payload);
        draft["brands"].push(action.payload.newBrand);
      });
    },
    [UPDATE_BRAND]: (state, action) => {
      return produce(state, (draft) => {
        let item = draft.brands.find(
          (item) => item.id === action.payload.newBrand.id
        );
        const { title, content, img } = action.payload.newBrand;
        item.title = title;
        item.content = content;
        item.img = img;
        //item = {title,content,img} 이 불가
      });
    },
    [CHANGE_PAGE]: (state, action) => {
      return produce(state, (draft) => {
        draft.page = action.payload;
      });
    },
    [INITIAL]: (state) => {
      return produce(state, (draft) => {
        draft.selectedI = -1;
      });
    },
    [SELECT_BRAND]: (state, action) => {
      const index = action.payload;
      return produce(state, (draft) => {
        draft.selectedI = index;
      });
    },
    [REMOVE_BRAND]: (state, action) => {
      return produce(state, (draft)=> {
       const indexNum = draft.brands.findIndex(item => item.id === action.payload)
       draft.brands.splice(indexNum, 1)
      })
    }
  },
  initialState
);

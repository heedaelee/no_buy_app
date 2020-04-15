/* eslint-disable react/react-in-jsx-scope */
import Main from "component/Main";
import * as brandActions from "modules/reducer";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const MainContainer = ({ page, BrandActions }) => {
  const handleChangePage = (value) => {
    const page = value;
    BrandActions.initial();
    BrandActions.changePage(page);
  };

  return (
    <div>
      <Main page={page} onChangePage={handleChangePage} />
    </div>
  );
};

export default connect(
  (state) => ({
    page: state.page,
  }),
  (dispatch) => ({
    BrandActions: bindActionCreators(brandActions, dispatch),
  })
)(MainContainer);

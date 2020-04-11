import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BrandList from "component/BrandList";
import * as BrandActions from "modules/reducer";

const BrandListContainer = ({ brands, BrandActions }) => {
  useEffect(() => {
    BrandActions.initial();
  }, );
  return (
    <div>
      <BrandList brands={brands} BrandActions={BrandActions} />
    </div>
  );
};

export default connect(
  (state) => ({
    brands: state.brands,
  }),
  (dispatch) => ({
    BrandActions: bindActionCreators(BrandActions, dispatch),
  })
)(BrandListContainer);

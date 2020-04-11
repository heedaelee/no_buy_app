import Form from "component/Form";
import * as brandActions from "modules/reducer";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid/v4";

const FormContainer = ({ brand, BrandActions, page }) => {
  const handleSubmit = (title, content) => {
    // console.log('title',title)
    const newBrand = {
      id: brand ? brand.id : uuid(),
      title: title,
      content: content,
      img: 0,
    };
    page === "register"
      ? BrandActions.addBrand({ newBrand })
      : BrandActions.updateBrand({ newBrand });
    BrandActions.changePage("list");
  };

  const handleBack = () => {
    console.log("뒤로");
    //페이지 이동 => 홈
    BrandActions.changePage("list");
  };

  const handleRemove = (id) => {
    BrandActions.removeBrand(id);
    BrandActions.changePage("list");
  };

  return (
    <div>
      <Form
        brand={brand}
        page={page}
        onSubmit={handleSubmit}
        BrandActions={BrandActions}
        goBack={handleBack}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    brand: state.brands[state.selectedI],
  }),
  (dispatch) => ({
    BrandActions: bindActionCreators(brandActions, dispatch),
  })
)(FormContainer);

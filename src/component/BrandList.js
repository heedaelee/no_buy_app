import React from "react";
import Brand from "component/Brand";

const BrandList = ({ brands, BrandActions }) => {
  const clickHandle = (i) => {
    BrandActions.selectBrand(i)
    BrandActions.changePage("editor")
  }


  return (
    <div>
      {brands.map((brand, i) => (
        <Brand
          key={brand.id}
          brand={brand}
          index={i}
          clickHandle={clickHandle}
        />
      ))}
    </div>
  );

};

export default BrandList;

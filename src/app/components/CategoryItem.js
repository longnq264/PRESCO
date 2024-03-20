import React from "react";
import { Image } from "antd";
const CategoryItem = (props) => {
  console.log(props.data);
  return (
    <div className="wrap-item">
      <div className="cat-item">
        <Image src="" alt="logo" />
      </div>
    </div>
  );
};

export default CategoryItem;

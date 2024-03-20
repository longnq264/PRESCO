import React from "react";
import { Flex } from "antd";
import CategoryItem from "./CategoryItem";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

const Categories = () => {
  const productImage = [product1, product2, product3, product4];
  return (
    <div className="category-container">
      <Flex gap="middle" align="start" vertical>
        <CategoryItem data={productImage} />
      </Flex>
    </div>
  );
};

export default Categories;

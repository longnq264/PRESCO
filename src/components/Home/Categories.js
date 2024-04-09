import React from "react";
import { Flex } from "antd";
import { Image, Button } from "antd";
import product1 from "@/public/assets/product1.png";
import product2 from "@/public/assets/product2.png";
import product3 from "@/public/assets/product3.png";
import product4 from "@/public/assets/product4.png";

const boxStyle = {};
const Categories = () => {
  const productData = [
    {
      src: product1,
      data: {
        title: "Auto europe",
        desc: "Presco Radiator Caps Ltd is committed to industry-leading coverage in every product category we bring to market.",
      },
    },
    {
      src: product2,
      data: {
        title: "japanese auto",
        desc: "Presco Radiator Caps Ltd is committed to industry-leading coverage in every product category we bring to market.",
      },
    },
    {
      src: product3,
      data: {
        title: "AGRICULTURAL",
        desc: "Presco Radiator Caps Ltd is committed to industry-leading coverage in every product category we bring to market.",
      },
    },
    {
      src: product4,
      data: {
        title: "Trucks & Commercial",
        desc: "Presco Radiator Caps Ltd is committed to industry-leading coverage in every product category we bring to market.",
      },
    },
  ];
  // console.log("list src", productData);
  return (
    <>
      <div className="categories-product">
        <h1 className="title-site">our product</h1>
        <div className="wrap-content">
          <div className="category-container layout-site">
            <Flex gap="middle" align="center">
              {productData.map((data, index) => (
                <Flex
                  key={index}
                  style={boxStyle}
                  justify="center"
                  align="center"
                  vertical
                >
                  <div className="box-item">
                    <Image src={`${data.src.src}`} alt="logo" />
                    <h3>{`${data.data.title}`}</h3>
                    <p>{`${data.data.desc}`}</p>
                    <Button>View More</Button>
                  </div>
                </Flex>
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

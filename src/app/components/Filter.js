import React from "react";
import DropdownBtn from "./Dropdown";
import { Form } from "antd";
const data = [
  { id: 1, name: "Year" },
  { id: 2, name: "Make" },
  { id: 3, name: "Model" },
  { id: 4, name: "Engine" },
  { id: 5, name: "All Categories" },
];
const Filter = () => {
  return (
    <div className="filter-container layout-site">
      <div className="filter-content">
        <h1>Find a product by</h1>
        <div className="filter"></div>
      </div>
    </div>
  );
};

export default Filter;

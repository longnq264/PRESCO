// import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
// import Link from "next/link";
// useState;
const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];
const DropdownBtn = (props) => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a>
      <Space>
        {props.name}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownBtn;

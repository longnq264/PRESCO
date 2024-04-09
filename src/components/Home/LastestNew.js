import React from "react";
import { Flex } from "antd";
import Members from "@/components/Home/Membes";
const LastestNew = () => {
  return (
    <div className="latest-main">
      <h1 className="title-site">Latest news</h1>
      <div className="latest-content layout-site">
        <Flex>
          <Members />
        </Flex>
      </div>
    </div>
  );
};

export default LastestNew;

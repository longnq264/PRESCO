import React from "react";
import { Carousel } from "antd";
import BannerSlider from "../assets/bannerslider.png";
import Image from "next/image";
const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <Carousel effect="fade">
    <div>
      <div style={contentStyle}>
        <Image src={BannerSlider} alt="banner" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image src={BannerSlider} alt="banner" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image src={BannerSlider} alt="banner" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image src={BannerSlider} alt="banner" />
      </div>
    </div>
  </Carousel>
);
export default App;

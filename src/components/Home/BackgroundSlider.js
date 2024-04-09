import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import SlideBg from "@/public/assets/bannerslider.png";

const contentStyle = {
  width: "100%",
  height: "565px",
};
const BackgroundSlider = () => (
  <nav className="slider-main">
    <Carousel effect="fade">
      <div className="slide-item">
        <div style={contentStyle}>
          <Image className="banner-carousel" src={SlideBg} alt="slide" fill />
        </div>
      </div>
      <div className="slide-item">
        <div style={contentStyle}>
          <Image
            src={SlideBg}
            className="banner-carousel"
            alt="slide"
            fill
            // objectFit="cover"
          />
        </div>
      </div>
      <div className="slide-item">
        <div style={contentStyle}>
          <Image
            className="banner-carousel"
            src={SlideBg}
            alt="slide"
            fill
            // objectFit="cover"
          />
        </div>
      </div>
      <div className="slide-item">
        <div style={contentStyle}>
          <Image
            className="banner-carousel"
            src={SlideBg}
            alt="slide"
            fill
            // objectFit="cover"
          />
        </div>
      </div>
      <div className="slide-item">
        <div style={contentStyle}>
          <Image
            className="banner-carousel"
            src={SlideBg}
            alt="slide"
            fill
            // objectFit="cover"
          />
        </div>
      </div>
    </Carousel>
  </nav>
);
export default BackgroundSlider;

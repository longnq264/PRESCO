import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import SlideBg from "../assets/bannerslider.png";

const contentStyle = {
  width: "100%",
  height: "565px",
};
const BackgroundSlider = () => (
  <Carousel effect="fade">
    <div className="slide-item">
      <div style={contentStyle}>
        <Image
          className="banner-carousel"
          src={SlideBg}
          alt="slide"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className="slide-item">
      <div style={contentStyle}>
        <Image
          src={SlideBg}
          className="banner-carousel"
          alt="slide"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className="slide-item">
      <div style={contentStyle}>
        <Image
          className="banner-carousel"
          src={SlideBg}
          alt="slide"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className="slide-item">
      <div style={contentStyle}>
        <Image
          className="banner-carousel"
          src={SlideBg}
          alt="slide"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className="slide-item">
      <div style={contentStyle}>
        <Image
          className="banner-carousel"
          src={SlideBg}
          alt="slide"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </Carousel>
);
export default BackgroundSlider;

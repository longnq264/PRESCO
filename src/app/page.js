import BackgroundSlider from "./components/BackgroundSlider";
import Filter from "./components/Filter";
import Image from "next/image";
import { Button, Flex, Segmented } from "antd";
import OurProduct from "./components/Categories";
export default function Home() {
  return (
    <div className="main-container">
      <nav className="slider-main">
        <BackgroundSlider />
      </nav>
      <div className="filter-main">
        <Filter />
      </div>
      <div className="core-main">
        <div className="core-container">
          <h1 className="sub-title">core values</h1>
          <div className="wrap-core layout-site">
            <section className="core-item">
              <div className="img-item-core">
                <p>your image</p>
              </div>
              <h1 className="title">coverage</h1>
              <h4 className="desc">WISH YOU COULD SAY YES MORE OFTEN?</h4>
              <p className="content">
                Presco Radiator Caps Ltd is committed to industry-leading
                coverage in every product category we bring to market.
              </p>
            </section>
            <section className="core-item">
              <div className="img-item-core">
                <p>your image</p>
              </div>
              <h1 className="title">service</h1>
              <h4 className="desc">
                STRUGGLING WIT FILL RATES & CATEGORY MANAGEMENT?
              </h4>
              <p className="content">
                Presco Radiator Caps fill rate average of 97.81%* and category
                management expertise will ensure your shelves are stocked with
                the right parts for optimal product availability.
              </p>
            </section>
            <section className="core-item">
              <div className="img-item-core">
                <p>your image</p>
              </div>
              <h1 className="title">INNOVATION</h1>
              <h4 className="desc">
                LOOKING FOR INNOVATIVE UP-SELL OPPORTUNITIES?
              </h4>
              <p className="content">
                Presco Radiator Caps Ltd is committed to industry-leading
                coverage in every product category we bring to market.Presco’s
                product and engineering teams are in tune with market issues,
                providing innovative OEM+ product solutions.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="categories-product">
        <OurProduct />
      </div>
    </div>
  );
}


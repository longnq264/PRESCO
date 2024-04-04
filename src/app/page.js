import { Flex } from "antd";
import BackgroundSlider from "@/components/Home/BackgroundSlider";
import Filter from "@/components/Home/Filter";
import OurProduct from "@/components/Home/Categories";
import Members from "@/components/Home/Membes";
export default function Home() {
  return (
    <>
      <main>
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
                    Presco Radiator Caps fill rate average of 97.81%* and
                    category management expertise will ensure your shelves are
                    stocked with the right parts for optimal product
                    availability.
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
                    coverage in every product category we bring to
                    market.Presco’s product and engineering teams are in tune
                    with market issues, providing innovative OEM+ product
                    solutions.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="categories-product">
            <h1 className="title-site">our product</h1>
            <div className="wrap-content">
              <OurProduct />
            </div>
          </div>
          <div className="listmember-main">
            <div className="listmember-categories">
              <h1 className="title-site">team members</h1>
              <Flex></Flex>
            </div>
          </div>
          <div className="latest-main">
            <h1 className="title-site">Latest news</h1>
            <div className="latest-content layout-site">
              <Flex>
                <Members />
              </Flex>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


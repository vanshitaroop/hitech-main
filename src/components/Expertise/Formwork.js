import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row, Space } from "antd";
import { ImageList, ImageListItem } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header/header";
import "./expertise.css";

// const machinerytwo = [
//   // { src: "Sources/images/expertise/formwork/9.jpg" },
//   // { src: "Sources/images/expertise/Machinerytwo/2.png" },
//   // { src: "Sources/images/expertise/Machinerytwo/3.png" },
//   // { src: "Sources/images/expertise/Machinerytwo/4.png" },
//   // { src: "Sources/images/expertise/Machinerytwo/5.png" },
// ];
export const galleryImages = [
  {
    rows: 1,
    cols: 2,
    src: "Sources/images/expertise/formwork/1.png",
    title: "Demo",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/5.png",
    title: "Demo",
  },
  {
    rows: 2,
    cols: 1,
    src: "Sources/images/expertise/formwork/4.png",
    title: "Demo",
  },
  {
    rows: 1,
    cols: 2,
    src: "Sources/images/expertise/formwork/2.png",
    title: "Demo",
  },
  {
    rows: 1,
    cols: 2,
    src: "Sources/images/expertise/formwork/3.png",
    title: "Demo",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/6.png",
    title: "Demo",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/7.png",
    title: "Demo",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/8.png",
    title: "Demo",
  },
];

const Formwork = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
  };
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  let cols = 6;
  if (width < 600) {
    cols = 6;
  } else if (width < 1200) {
    cols = 6;
  }

  return (
    <>
      <img
        src="Sources/images/bg/Residential (13).png"
        alt="404 -Not Given"
        className="about_img"
        //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />
      <Header />
      <section className="mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <div className="mb-5 has-text-centered">
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
              Formwork
            </p>
            <p>
              Our formwork cell caters to the designing, detailing,
              customization, procurement, deployment, training and
              implementation requirements of our projects. Based on the formwork
              scheme, the deployment schedule is firmed up to meet the
              construction sequence at site. It ensures proper utilisation of
              formwork,achieving cycle time, productivity targets, handling,
              cleaning and upkeep of formwork materials.
              <br />
              <br /> For each concrete structure and component, Hitech deploys
              the most suitable formwork system from major formwork companies
              such as PERI, DOKA and Alsina around the globe. <br />
              <br />
              Hitech makes sure the kind of materials and formworks used for
              every project are based after considering on-site efficiency of
              production, health , safety and environmental issues, driving
              towards ever-increasing efficiency.
            </p>
          </div>
        </div>
        {/* <div className="container-fluid mt-3">
          <div>
            <ImageList cols={cols} className="Py-4 img">
              {galleryImages.map((item, key) => {
                let style = item.style || {};
                return (
                  <ImageListItem
                    rows={item.rows}
                    cols={item.cols}
                    key={key}
                    className="gallery_image"
                  >
                    <img
                      src={item.src}
                      alt={item.alt || "404 - Not Found"}
                      style={{ ...style }}
                    />
                    <p className="overlay">{item.title}</p>
                  </ImageListItem>
                );
              })}
            </ImageList>
          </div>
        </div> */}
        <div className="section_padding"></div>
      </section>

      <section className="section-4">
        <div className="container">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Handshet Alpha.png"
                  alt=""
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>
                      Handshet <br /> Alpha
                    </span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>
            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Ring Lock.png"
                  alt=""
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>Ring Lock</span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>
            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Eco- Speedy.png"
                  alt=""
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>
                      Eco <br />
                      Speedy
                    </span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>

            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Alpha dek 2.png"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>Alpha deck</span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>

            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Material Lifter Final.jpg"
                  alt=""
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>
                      Material <br /> Lifter
                    </span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>
            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Climbing Platform.jpg"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>
                      Climbing <br /> Platform
                    </span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>

            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Multi flex.jpg"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>Multi flex</span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>

            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Standard Belex.png"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>
                      Standard <br /> Belex
                    </span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>
            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className="figure m-3">
                <img
                  src="Sources/images/expertise/formwork/Alsina.jpeg"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="service_line">
                  <h3
                    style={{ color: "#03446a" }}
                    className="has-text-centered"
                  >
                    <span>Alsina</span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            </Col>
          </Row>
        </div>
      </section>

      <section className="section_padding"></section>

      {/* <section className="mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xxl={12} lg={12} md={12} sm={24} xs={24} className="my-auto">
              <div>
                {machinerytwo.map((item, key) => {
                  return (
                    <div>
                      <img src={item.src} alt="404 - Not Given" />
                    </div>
                  );
                })}
                <Slider {...settings}>
                  {machinerytwo.map((item, key) => {
                    return (
                      <div>
                        <img src={item.src} alt="404 - Not Given" />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
            <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
            <Col xxl={11} lg={11} md={24} sm={24} xs={24} className="my-auto">
              <p className="has-text-left">
                For each concrete structure and component, Hitech deploys the
                most suitable formwork system from major formwork companies such
                as PERI, DOKA and Alsina around the globe.
              </p>
              <br />
              <p className="has-text-left">
                Hitech makes sure the kind of materials and formworks used for
                every project are based after considering on-site efficiency of
                production, health , safety and environmental issues, driving
                towards ever-increasing efficiency.
              </p>
            </Col>
          </Row>
        </div>
        <div className="section_padding"></div>
      </section> */}
      {/* <div className="section_padding"></div> */}
    </>
  );
};
export default Formwork;

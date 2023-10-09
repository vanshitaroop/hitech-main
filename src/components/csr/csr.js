import { Col, Row } from "antd";
import React from "react";
import Header from "../header/header";
import YouTube from "react-youtube";

const awardscard = [
  { src: "https://www.youtube.com/embed/YkmQBe1Lebk" },
  { src: "https://www.youtube.com/embed/hrUdXoxY2nw" },
  { src: "https://www.youtube.com/embed/vKRGP_M8uwU" },
  { src: "https://www.youtube.com/embed/nce0C4wAU5Y" },
  // { src: "https://www.youtube.com/embed/3dSwb2a8RTY" },
];

const Csr = () => {
  return (
    <>
      <img
        src="Sources/images/csr/CSR.JPG"
        alt="404 -Not Given"
        className="about_img"
        // style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="about-us-bg">
        <Header />
        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-5 mt-3">
                Hitech takes its role as a socially responsible corporate
                citizen seriously, with a strong commitment to contributing to
                the well-being of the community. We allocate resources
                diligently to make a meaningful impact on society. Our corporate
                social responsibility (CSR) initiatives are designed to address
                various societal needs, from education and healthcare to
                environmental sustainability. These programs reflect our core
                values and our dedication to making a positive difference in the
                lives of those around us.
              </p>
              <div className="mt-5" style={{ marginLeft: "3%" }}>
                <li>Education for construction worker children</li>
                <YouTube videoId="YkmQBe1Lebk" />
                <blockquote>
                  <i>
                    <b>
                      <br />
                      As their parents help to build the homes of our dreams...
                      <br />
                      we take a small step to help them build their own dreams.
                      <br />
                      <br />
                    </b>
                  </i>
                </blockquote>
                <YouTube videoId="hrUdXoxY2nw" />
                <br />
                <li>
                  Regular medical, eye checkup camps at labour colonies. <br />
                  {/* <img
                    style={{ height: "300px", width: "auto" }}
                    src="Sources/images/csr/Aids Awareness.jpeg"
                    alt="img"
                  /> */}
                </li>

                <br />
                <li>
                  Workshops on AIDS, tobacco and alcohol awareness. <br />
                  {/* <img
                    style={{ height: "300px", width: "auto" }}
                    src="Sources/images/csr/Medical Checkup.jpeg"
                    alt="img"
                  /> */}
                </li>

                <br />
                <li>
                  Workshops on malnutrition awareness and nutritional grocery
                  kit distribution. <br />
                  {/* <img
                    style={{ height: "300px", width: "auto" }}
                    src="Sources/images/csr/Grocery Kit.jpg"
                    alt="img"
                  /> */}
                </li>
                <br />
                <li>
                  Support for holistic village development initiative by Dreams
                  Foundation.
                </li>
                <br />
                <li>
                  Support for patient care and medical equipment to various
                  charitable hospitals.
                </li>
                <br />
                <li>Support for stray animal welfare.</li>
                <br />
                {/* <Row style={{ display: "flex", justifyContent: "center" }}>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/1.jpg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/2.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/3.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/4.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/5.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/6.jpeg" />
                  </Col>
                </Row> */}
              </div>
            </div>
          </div>
          <div className="container">
            <Row
              style={{ display: "flex", justifyContent: "center" }}
              className="csr_grid"
            >
              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/1.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>
                        Education for construction <br /> workers children
                      </span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>
              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/2.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>Regular health check-up camps </span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>
              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/3.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>Nutritional grocery kit distribution</span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>

              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/4.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>AIDS, Tobacco awareness camp</span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>

              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/5.jpg" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>Holistic village development</span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>
              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/6.jpg" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>Women Empowerment</span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>

              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/7.jpg" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>Safe Haven for stray dogs</span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>

              <Col
                xxl={6}
                lg={6}
                md={12}
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="figure m-3">
                  <img src="Sources/images/csr/CSR/8.jpg" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>Safe Haven for stray dogs</span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};
export default Csr;

import { Col, Row } from "antd";
import { BiNotepad } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import Header from "../header/header";
import "./s.css";

const quality = [
  {
    src1: "Sources/images/standards/Quality/1. On site checking.jpg",
    src2: "Sources/images/standards/Quality/2. Slab Checking.jpg",
    src3: "Sources/images/standards/Quality/3. Approval of work.jpg",
    src4: "Sources/images/standards/Quality/4. Finshed Product.jpg",
    src5: "Sources/images/standards/Quality/5. Material Testing.jpg",
    src6: "Sources/images/standards/Quality/6. Testing training.jpg",
  },
];
const safety = [{ src: "Sources/images/standards/safety/9.png" }];

// import img1 from "../../../public/Sources/images/standards/Quality/1.jpg";
// import img2 from "../../../public/Sources/images/standards/Quality/2.jpg";
// import img3 from "../../../public/Sources/images/standards/Quality/3.jpg";
// import img4 from "../../../public/Sources/images/standards/Quality/7.jpg";
// import img5 from "../../../public/Sources/images/standards/Quality/5.jpg";
// import img6 from "../../../public/Sources/images/standards/Quality/8.jpg";
// const safetytwo = [
//   // { src: "Sources/images/standards/safety/5.png" },
//   { src: "Sources/images/standards/safety/6.png" },
//   // { src: "Sources/images/standards/safety/7.png" },
//   // { src: "Sources/images/standards/safety/8.png" },
// ];
// const training = [
//   // { src: "Sources/images/standards/traning/1.png" },
//   // { src: "Sources/images/standards/traning/2.png" },
//   // { src: "Sources/images/standards/traning/3.png" },
//   { src: "Sources/images/standards/traning/6.jpg" },
//   // { src: "Sources/images/standards/traning/5.png" },
// ];

const Standards = () => {
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
        src="Sources/images/standards/standards.JPG"
        alt="404 -Not Given"
        className="about_img"
        //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="about-us-bg">
        <Header />
        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="mb-5">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color">
                Quality
              </p>
              <p className="is-size-4 has-text-weight-semibold has-text-centered">
                Quality over Quantity
              </p>
            </div>
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
                <div>
                  <p className="has-text-left">
                    Being among the first to achieve ISO 9001:2015
                    Certification, Hitech sets the bar high for quality
                    standards in construction services. Our success is rooted in
                    a customer-centric approach, executed by a team of highly
                    skilled professionals. We are steadfast in our commitment to
                    continual improvement, a philosophy that keeps us at the
                    forefront of the industry. Our reputation for quality is
                    further bolstered by our comprehensive strategy that
                    encompasses advanced processes, tools, and training aimed at
                    enhancing quality issue identification and resolution. We
                    also prioritize human factors that drive the achievement of
                    'right the first time' quality, ensuring that our services
                    consistently exceed customer expectations.
                  </p>
                  <div className="mt-4">
                    <li>
                      Provision of processes, tools, training, and expertise to
                      improve the identification and resolution of quality
                      issues.
                    </li>
                    <li>
                      Focusing on human behaviors that drive "right the first
                      time" quality.
                    </li>
                  </div>
                  <Row>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <BiNotepad className="is-size-1 blue_color" />
                        <p>Method Statement</p>
                      </div>
                    </Col>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <BsShieldCheck className="is-size-1 blue_color" />
                        <p>Standard Material and Practices</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <AiOutlineAudit className="is-size-1 blue_color" />
                        <p>Strong Internal Audit Systems</p>
                      </div>
                    </Col>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <BsCardChecklist className="is-size-1 blue_color" />
                        <p>Checklists And Work Instructions</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>

              <Col xxl={11} lg={11} md={24} sm={24} xs={24}>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <Col
                    xxl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <figure className="figure m-3">
                      <img
                        src="Sources/images/standards/Quality/1. On site checking.jpg"
                        style={{ height: "200px", width: "100%" }}
                        alt=""
                      />
                      <div className="service_line">
                        <h3
                          style={{ color: "#03446a" }}
                          className="has-text-centered"
                        >
                          <span>
                            On site <br /> checking
                          </span>
                        </h3>
                        <a href="#"></a>
                      </div>
                    </figure>
                  </Col>
                  <Col
                    xxl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <figure className="figure m-3">
                      <img
                        src="Sources/images/standards/Quality/2. Slab Checking.jpg"
                        alt=""
                        style={{ height: "200px", width: "100%" }}
                      />
                      <div className="service_line">
                        <h3
                          style={{ color: "#03446a" }}
                          className="has-text-centered"
                        >
                          <span>
                            Slab <br />
                            Checking
                          </span>
                        </h3>
                        <a href="#"></a>
                      </div>
                    </figure>
                  </Col>
                  <Col
                    xxl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <figure className="figure m-3">
                      <img
                        src="Sources/images/standards/Quality/3. Approval of work.jpg"
                        alt=""
                        style={{ height: "200px", width: "100%" }}
                      />
                      <div className="service_line">
                        <h3
                          style={{ color: "#03446a" }}
                          className="has-text-centered"
                        >
                          <span>
                            Approval <br /> of work
                          </span>
                        </h3>
                        <a href="#"></a>
                      </div>
                    </figure>
                  </Col>
                  <Col
                    xxl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <figure className="figure m-3">
                      <img
                        src="Sources/images/standards/Quality/4. Finshed Product.jpg"
                        alt=""
                        style={{ height: "200px", width: "100%" }}
                      />
                      <div className="service_line">
                        <h3
                          style={{ color: "#03446a" }}
                          className="has-text-centered"
                        >
                          <span>
                            Finished <br />
                            Product
                          </span>
                        </h3>
                        <a href="#"></a>
                      </div>
                    </figure>
                  </Col>
                  <Col
                    xxl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <figure className="figure m-3">
                      <img
                        src="Sources/images/standards/Quality/5. Material Testing.jpg"
                        alt=""
                        style={{ height: "200px", width: "100%" }}
                      />
                      <div className="service_line">
                        <h3
                          style={{ color: "#03446a" }}
                          className="has-text-centered"
                        >
                          <span>
                            Material <br />
                            Testing
                          </span>
                        </h3>
                        <a href="#"></a>
                      </div>
                    </figure>
                  </Col>
                  <Col
                    xxl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <figure className="figure m-3">
                      <img
                        src="Sources/images/standards/Quality/6. Testing training.jpg"
                        alt=""
                        style={{ height: "200px", width: "100%" }}
                      />
                      <div className="service_line">
                        <h3
                          style={{ color: "#03446a" }}
                          className="has-text-centered"
                        >
                          <span>
                            Testing <br /> training
                          </span>
                        </h3>
                        <a href="#"></a>
                      </div>
                    </figure>
                  </Col>
                </Row>
                {/* <Row>
                  <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            className="zoom"
                            src={item.src1}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />

                          <p className="overlay">Demo text</p>
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            className="zoom"
                            src={item.src2}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Row> */}
                {/* <Row className="mt-5">
                  <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            className="zoom"
                            src={item.src3}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            className="zoom"
                            src={item.src4}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Row> */}
                {/* <Row className="mt-5">
                  <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            className="zoom"
                            src={item.src5}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            className="zoom"
                            src={item.src6}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Row> */}

                {/* {quality.map((item, key) => {
                  return (
                    <div style={{ height: "100%" }}>
                      <img
                        src={item.src}
                        alt="404 - Not Given"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  );
                })} */}
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="mb-5">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color">
                Safety
              </p>
              <p className="is-size-4 has-text-weight-semibold has-text-centered">
                We believe in prevention
              </p>
            </div>
            <Row>
              {width > 768 && (
                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <div>
                    {safety.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}

                    {/* {machinery.map((item, key) => {
                        return <img src={item.src} alt="404 - Not Given" />;
                      })} 
                    </div>*/}
                  </div>
                </Col>
              )}

              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  <p className="has-text-left">
                    Safety is a cornerstone value at Hitech, and we are
                    committed to offering a secure working environment for our
                    employees as well as our contractors and subcontractors. By
                    encouraging responsible behavior, good judgment, and due
                    diligence, we have significantly reduced the rate of
                    workplace incidents. From the very beginning, we have
                    focused on creating a culture that aims for zero injuries.
                    To realize this goal, we have implemented robust training
                    modules that focus on preventing personal injury and
                    property damage. These educational programs are continually
                    updated to provide everyone involved with the resources
                    necessary for maintaining safety.
                  </p>
                </div>
              </Col>
              {width < 769 && (
                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  {/* <div>
                    <Carousel
                      swipeable
                      autoPlay
                      infiniteLoop={true}
                      emulateTouch={true}
                      showArrows={false}
                      showThumbs={false}
                      showStatus={false}
                      interval={1000}
                      stopOnHover
                    >
                      {safety.map((item, key) => {
                        return (
                          <div style={{ height: "100%" }}>
                            <img
                              src={item.src}
                              alt="404 - Not Given"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        );
                      })}

                      {machinery.map((item, key) => {
                        return <img src={item.src} alt="404 - Not Given" />;
                      })} 
                    </div>
                    </Carousel>
                  </div> */}
                </Col>
              )}
            </Row>
            {/* <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  <div style={{ height: "100%" }}>
                    <img
                      src="Sources/images/standards/safety/9.png"
                      alt="404 - Not Given"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </Col>
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col xxl={11} lg={11} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  {safetytwo.map((item, key) => {
                    return (
                      <div style={{ height: "100%" }}>
                        <img
                          src={item.src}
                          alt="404 - Not Given"
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row> */}

            <div className="container" style={{ width: "70%" }}>
              <Row className="mt-5">
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <figure className="figure m-3">
                    <img
                      src="Sources/images/standards/safety/01 Tool box talk.jpeg"
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                    />
                    <div className="service_line">
                      <h3
                        style={{ color: "#03446a" }}
                        className="has-text-centered"
                      >
                        <span>Tool box talk</span>
                      </h3>
                      <a href="#"></a>
                    </div>
                  </figure>
                  {/* <div style={{ height: "100%" }}>
                    <img
                      className="zoom"
                      src={"Sources/images/standards/safety/Entry.png"}
                      alt="404 - Not Given"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div> */}
                </Col>
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <figure className="figure m-3">
                    <img
                      src="Sources/images/standards/safety/02 Health checkup.jpeg"
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                    />
                    <div className="service_line">
                      <h3
                        style={{ color: "#03446a" }}
                        className="has-text-centered"
                      >
                        <span>Health checkup</span>
                      </h3>
                      <a href="#"></a>
                    </div>
                  </figure>
                  {/* <div style={{ height: "100%" }}>
                    <img
                      className="zoom"
                      src={"Sources/images/standards/safety/Award.jpg"}
                      alt="404 - Not Given"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div> */}
                </Col>
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <figure className="figure m-3">
                    <img
                      src="Sources/images/standards/safety/03 Hyginic labour camp.jpeg"
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                    />
                    <div className="service_line">
                      <h3
                        style={{ color: "#03446a" }}
                        className="has-text-centered"
                      >
                        <span>
                          Hyginic
                          <br /> labour camp
                        </span>
                      </h3>
                      <a href="#"></a>
                    </div>
                  </figure>
                  {/* <div style={{ height: "100%" }}>
                    <img
                      className="zoom"
                      src={
                        "Sources/images/standards/safety/Monthly EHS Inspection.jpg"
                      }
                      alt="404 - Not Given"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div> */}
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <figure className="figure m-3">
                    <img
                      src="Sources/images/standards/safety/04 PPE's.jpg"
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                    />
                    <div className="service_line">
                      <h3
                        style={{ color: "#03446a" }}
                        className="has-text-centered"
                      >
                        <span>PPE's</span>
                      </h3>
                      <a href="#"></a>
                    </div>
                  </figure>
                  {/* <div style={{ height: "100%" }}>
                    <img
                      className="zoom"
                      src={
                        "Sources/images/standards/safety/Motivational Program.jpg"
                      }
                      alt="404 - Not Given"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div> */}
                </Col>
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <figure className="figure m-3">
                    <img
                      src="Sources/images/standards/safety/05 Motivational Program.jpeg"
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                    />
                    <div className="service_line">
                      <h3
                        style={{ color: "#03446a" }}
                        className="has-text-centered"
                      >
                        <span>
                          Motivational <br /> Program
                        </span>
                      </h3>
                      <a href="#"></a>
                    </div>
                  </figure>
                  {/* <div style={{ height: "100%" }}>
                    <img
                      className="zoom"
                      src={"Sources/images/standards/safety/Road Safety.png"}
                      alt="404 - Not Given"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div> */}
                </Col>
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <figure className="figure m-3">
                    <img
                      src="Sources/images/standards/safety/06 Mock drill.jpeg"
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                    />
                    <div className="service_line">
                      <h3
                        style={{ color: "#03446a" }}
                        className="has-text-centered"
                      >
                        <span>Mock drill</span>
                      </h3>
                      <a href="#"></a>
                    </div>
                  </figure>
                  {/* <div style={{ height: "100%" }}>
                    <img
                      className="zoom"
                      src={"Sources/images/standards/safety/Assembly point.jpg"}
                      alt="404 - Not Given"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div> */}
                </Col>
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="mb-5">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color">
                Training And Development
              </p>
              <p className="has-text-centered">
                Focused on enhancing competence in technical, managerial, and
                behavioral facets, Hitech regularly organizes training programs
                aimed at all levels of the organization. Our objective is to
                narrow the divide between existing proficiencies and the desired
                skill sets. We maintain that ongoing training and development
                are key to the continuous improvement of the organization's
                overall performance. This commitment to development not only
                benefits our internal team but also extends to fulfilling the
                expectations of our external customers.
              </p>
            </div>
            <div>
              <p className="has-text-centered">
                In summary, we consider 'Training and Development' to be an
                endless journey towards excellence.
              </p>
              <p className="has-text-centered has-text-weight-semibold blue_color mt-5">
                “Training and Development is a continual improvement procedure”
              </p>
            </div>
            <div className="mt-5">
              <Row>
                <Col
                  xxl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <div>
                    <Row>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <BiNotepad className="is-size-1 blue_color" />
                          <p>Behavioural Training</p>
                        </div>
                      </Col>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <BsShieldCheck className="is-size-1 blue_color" />
                          <p>Safety Training</p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <AiOutlineAudit className="is-size-1 blue_color" />
                          <p>Induction Training</p>
                        </div>
                      </Col>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <BsCardChecklist className="is-size-1 blue_color" />
                          <p>Technical Training</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  {/* <div>
                    <Carousel
                      swipeable
                      autoPlay
                      infiniteLoop={true}
                      emulateTouch={true}
                      showArrows={false}
                      showThumbs={false}
                      showStatus={false}
                      interval={1000}
                      stopOnHover
                    >
                    {training.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                    </Carousel>
                  </div> */}
                  <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
                  <Row className="mt-5">
                    <Col
                      xxl={11}
                      lg={11}
                      md={12}
                      sm={24}
                      xs={24}
                      className="mt-5"
                    >
                      {quality.map((item, key) => {
                        return (
                          <div style={{ height: "100%" }}>
                            <img
                              className="zoom"
                              src={"Sources/images/standards/traning/6.jpg"}
                              alt="404 - Not Given"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        );
                      })}
                    </Col>
                    <Col
                      xxl={11}
                      lg={11}
                      md={12}
                      sm={24}
                      xs={24}
                      className="mt-5 ml-2"
                    >
                      {quality.map((item, key) => {
                        return (
                          <div style={{ height: "100%" }}>
                            <img
                              className="zoom"
                              src={
                                "Sources/images/standards/traning/Inhouse Training.jpg"
                              }
                              alt="404 - Not Given"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        );
                      })}
                    </Col>

                    <Col
                      xxl={11}
                      lg={11}
                      md={12}
                      sm={24}
                      xs={24}
                      className="mt-5"
                    >
                      {quality.map((item, key) => {
                        return (
                          <div style={{ height: "100%" }}>
                            <img
                              className="zoom"
                              src={"Sources/images/standards/traning/8.jpg"}
                              alt="404 - Not Given"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        );
                      })}
                    </Col>
                    <Col
                      xxl={11}
                      lg={11}
                      md={12}
                      sm={24}
                      xs={24}
                      className="mt-5 ml-2"
                    >
                      {quality.map((item, key) => {
                        return (
                          <div style={{ height: "100%" }}>
                            <img
                              className="zoom"
                              src={"Sources/images/standards/traning/9.jpg"}
                              alt="404 - Not Given"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        );
                      })}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>

          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};
export default Standards;

import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row, Space } from "antd";
import { GiElectricalResistance } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa";
import { GiTeePipe } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiBulldozer } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { BsHandThumbsUp } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoMdFingerPrint } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import { MdOutlineAlarmOn } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { GiHealingShield } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BsHouse } from "react-icons/bs";
import { ImageList, ImageListItem } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header/header";

const machinery = [
  { src: "Sources/images/expertise/Machinery/1.png" },
  { src: "Sources/images/expertise/Machinery/2.png" },
  { src: "Sources/images/expertise/Machinery/3.png" },
  { src: "Sources/images/expertise/Machinery/4.png" },
  { src: "Sources/images/expertise/Machinery/5.png" },
  { src: "Sources/images/expertise/Machinery/6.png" },
];
const machinerytwo = [
  { src: "Sources/images/expertise/Machinerytwo/1.png" },
  { src: "Sources/images/expertise/Machinerytwo/2.png" },
  { src: "Sources/images/expertise/Machinerytwo/3.png" },
  { src: "Sources/images/expertise/Machinerytwo/4.png" },
  { src: "Sources/images/expertise/Machinerytwo/5.png" },
];

export const galleryImages = [
  {
    rows: 1,
    cols: 2,
    src: "Sources/images/expertise/formwork/1.png",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/5.png",
  },
  {
    rows: 2,
    cols: 1,
    src: "Sources/images/expertise/formwork/4.png",
  },
  {
    rows: 1,
    cols: 2,
    src: "Sources/images/expertise/formwork/2.png",
  },
  {
    rows: 1,
    cols: 2,
    src: "Sources/images/expertise/formwork/3.png",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/6.png",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/7.png",
  },
  {
    rows: 1,
    cols: 1,
    src: "Sources/images/expertise/formwork/8.png",
  },
];
const erp = [
  {
    icon: <AiOutlineFundProjectionScreen />,
    title: "Project Planning & Tracking",
  },
  {
    icon: <GiBulldozer />,
    title: "Plant & Machinery",
  },
  {
    icon: <GiMoneyStack />,
    title: "Finance And Billing",
  },
  {
    icon: <BsHandThumbsUp />,
    title: "Quality Control",
  },
  {
    icon: <FaStore />,
    title: "Store",
  },
  {
    icon: <GiReceiveMoney />,
    title: "Sales",
  },
  {
    icon: <GiReceiveMoney />,
    title: "Purchase",
  },
  {
    icon: <AiFillSafetyCertificate />,
    title: "Safety",
  },
  {
    icon: <MdGroups />,
    title: "Manpower Tracking",
  },
];

const servicecard = [
  {
    icon: <FaIndustry className="is-size-1 service_mainicon" />,
    title: "CIVIL WORK",
    des: "We have expertise to undertake varieties of civil work with materials for basic construction activities of industrial plant, institutional buildings, low rise buildings, high rise buildings, etc.",
  },
  {
    icon: <GiTeePipe className="is-size-1" />,
    title: "MEP WORK",
    des: "We execute electrical work, fire fighting work, plumbing work, etc, by engaging specialised and competent agencies.",
  },
  {
    icon: <BsHouse className="is-size-1" />,
    title: "FINISHING WORK",
    des: "We deliver finest finish of various finishing activities like painting, flooring, railing, aluminium work, wood work, other bought out items, etc.",
  },
];

const Services = () => {
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
        src="Sources/images/bg/a12.jpg"
        alt="404 -Not Given"
        className="about_img"
      //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="services-page-bg">
        <Header />
        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
                Services And Capabilities
              </p>
            </div>
            <div>
              <p className="is-size-4 has-text-centered mb-5 has-text-weight-semibold">
                Hitech has the resources and knowledge to undertake just about
                any job.
              </p>
              <p className="has-text-centered">
                With projects, people, and technology, Hitech has unmatched
                reach and expertise. Hitech performs engineering, procurement ,
                construction and project management on major construction
                projects. Hitech has specialised in construction of high rise
                buildings, complex structures etc. Hitech has a proven track
                record of working smoothly with different organizations.
                Orchestrating major operations demand first-rate construction
                management, something that Hitech vouches for in every service
                provided in the execution of each project.
              </p>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>

        <section>
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
                What We Do
              </p>
            </div>
            <div>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                {servicecard.map((item, key) => {
                  return (
                    <Col
                      xxl={8}
                      lg={8}
                      md={12}
                      sm={24}
                      xs={24}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card className="servicecard">
                        <div className="has-text-centered service_icon">
                          <div className="icon_border">{item.icon}</div>
                        </div>
                        <div>
                          <p className="is-size-4 has-text-weight-semibold has-text-centered is-uppercase service_title mt-3">
                            {item.title}
                          </p>
                          <p className="is-size-5 has-text-left mt-4">
                            {item.des}
                          </p>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="machinary mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-4">
              Expertise
            </p>
            <div>
              <div>
                <p className="is-size-3 has-text-weight-semibold has-text-centered blue_color mb-3">
                  Plant And Machinery
                </p>
              </div>
              <div>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <Col
                    xxl={12}
                    lg={12}
                    md={24}
                    sm={24}
                    xs={24}
                    className="my-auto"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <p className="has-text-left mr-4">
                      We have established a robust plant and machinery cell that
                      is responsible for repair and management system. The cell
                      also looks after resource planning, selection of right
                      equipment for procurement, installation, commissioning and
                      routine preventive maintenance. The tower cranes,
                      passenger and material hoists, concrete pumps are deployed
                      at the project sites after due consideration of the
                      project requirement, movement restrictions, perfromance
                      requirements etc.
                    </p>
                  </Col>
                  <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
                  <Col
                    xxl={11}
                    lg={11}
                    md={12}
                    sm={24}
                    xs={24}
                    className="my-auto"
                  // style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div>
                      <Slider {...settings}>
                        {machinery.map((item, key) => {
                          return (
                            <div>
                              <img src={item.src} alt="404 - Not Given" />
                            </div>
                          );
                        })}
                      </Slider>
                      {/* <Carousel
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
                      {machinery.map((item, key) => {
                        return (
                          <div style={{ height: "100%" }}>
                            <img
                              src={item.src}
                              alt="404 - Not Given"
                              style={{ height: "100%" }}
                            />
                          </div>
                        );
                      })}
                    </Carousel> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
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
                  <img src="Sources/images/expertise/machinary2/1.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>
                        Tower
                        <br />
                        Crane
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
                  <img src="Sources/images/expertise/machinary2/2.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>
                        Boom <br />
                        Placer
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
                  <img src="Sources/images/expertise/machinary2/3.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>
                        Batching
                        <br /> Plant
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
                  <img src="Sources/images/expertise/machinary2/4.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>
                        Soil&nbsp;
                        <br />
                        Machine
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
                  <img src="Sources/images/expertise/machinary2/5.png" alt="" />
                  <div className="service_line">
                    <h3
                      style={{ color: "#03446a" }}
                      className="has-text-centered"
                    >
                      <span>
                        Transit <br />
                        Mixer
                      </span>
                    </h3>
                    <a href="#"></a>
                  </div>
                </figure>
              </Col>
            </Row>
          </div>
        </section>

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
                implementation requirements of our projects. Based on the
                formwork scheme, the deployment schedule is firmed up to meet
                the construction sequence at site. It ensures proper utilisation
                of formwork,achieving cycle time, productivity targets,
                handling, cleaning and upkeep of formwork materials.
              </p>
            </div>
          </div>
          <div className="container-fluid mt-3">
            <div>
              <ImageList cols={cols} className="Py-4">
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
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col xxl={12} lg={12} md={12} sm={24} xs={24} className="my-auto">
                <div>
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
                  most suitable formwork system from major formwork companies
                  such as PERI, DOKA and Alsina around the globe.
                </p>
                <br />
                <p className="has-text-left">
                  Hitech makes sure the kind of materials and formworks used for
                  every project are based after considering on-site efficiency
                  of production, health , safety and environmental issues,
                  driving towards ever-increasing efficiency.
                </p>
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="has-text-centered">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
                Focusing on the Right Technology
              </p>
              <p>
                Continually developing information systems to improve our work
                by focusing on Latest Technologies and being the pioneer in
                Technology also.
              </p>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="container">
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <p className="is-size-3 blue_color has-text-weight-semibold mb-3">
                  ERP
                </p>
                <p className="has-text-left">
                  Our ERP System combines advanced enterprise technologies with
                  decades of construction industry experience into one,
                  integrated system. Going beyond traditional construction
                  management software, our ERP combines Analytics to
                  Documentation to Planning, all the things at one place within
                  one click. It also incorporates document, content, and
                  business process management capabilities apart from:
                </p>
                <div>
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    {erp.map((item, key) => {
                      return (
                        <Col
                          xxl={8}
                          lg={8}
                          md={8}
                          sm={12}
                          xs={12}
                          className="mt-5"
                        >
                          <div className="expertise_card">
                            <div>
                              <Space direction="vertical">
                                <div className="tech_icon">{item.icon}</div>
                                <p>{item.title}</p>
                              </Space>
                            </div>
                            {/* <Space direction="vertical">
                            {item.icon}
                            <p>{item.title}</p>
                          </Space> */}
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col
                xxl={11}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className="my-auto has-text-centered"
              >
                <img
                  src="Sources/images/expertise/tech/1.png"
                  alt="404 - Not Given"
                />
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="container">
            <Row>
              {width > 768 && (
                <Col
                  xxl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <img
                    src="Sources/images/expertise/tech/2.png"
                    alt="404 - Not Given"
                  />
                </Col>
              )}
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col xxl={11} lg={11} md={24} sm={24} xs={24} className="my-auto">
                <p className="is-size-3 blue_color has-text-weight-semibold mb-3">
                  Hi-Mapp
                </p>
                <p className="has-text-left">
                  Hi-Mapp is Hitech's productivity app helping teams to deliver
                  on time. Hi-Mapp provides users the ease of mobility. Hi-Mapp
                  groups together most essential functionalities of ERP and HRMS
                  to improve productivity.
                </p>
                <div className="mt-3">
                  <Space direction="horizontal" className="mt-5 blue_color">
                    <div className="tech_icon">
                      <MdOutlineNotificationsNone />
                    </div>
                    <p className="ml-2">
                      <span className="has-text-weight-semibold">
                        Instant notification based Approval&nbsp;
                      </span>
                      functionality so work never stops.
                    </p>
                  </Space>
                  <Space direction="horizontal" className="mt-5 blue_color">
                    <div className="tech_icon">
                      <FaCalculator />
                    </div>
                    <p className="ml-2">
                      <span className="has-text-weight-semibold">
                        Monitoring Project financials, ManPower&nbsp;
                      </span>
                      round the clock with enhanced analytics.
                    </p>
                  </Space>
                  <Space direction="horizontal" className="mt-5 blue_color">
                    <div className="tech_icon">
                      <IoMdFingerPrint />
                    </div>
                    <p className="ml-2">
                      <span className="has-text-weight-semibold">
                        Keeping Employees First&nbsp;
                      </span>
                      by providing HRMS functionalities to them at the
                      fingertips.
                    </p>
                  </Space>
                </div>
              </Col>
              {width < 769 && (
                <Col
                  xxl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <img
                    src="Sources/images/expertise/tech/2.png"
                    alt="404 - Not Given"
                  />
                </Col>
              )}
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="has-text-centered">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
                Future Technologies
              </p>
            </div>
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  <p className="is-size-3 blue_color has-text-weight-semibold mb-3">
                    INTERNET OF THINGS
                  </p>
                  <p className="has-text-left">
                    Hitech incorporates and uses to build up secure and well
                    managed architecture of interconnected things. From Asset
                    Tracking to Data collections from IoT enabled devices,
                    Hitech is adapting to the latest trends in IoT.
                  </p>
                  <div className="mt-3">
                    <Space direction="horizontal" className="mt-5 blue_color">
                      <div className="tech_icon">
                        <MdOutlineAlarmOn />
                      </div>
                      <p className="ml-2">
                        <span className="has-text-weight-semibold">
                          Managing Asset&nbsp;
                        </span>
                        with the help of IoT enabled Machines.
                      </p>
                    </Space>
                    <Space direction="horizontal" className="mt-5 blue_color">
                      <div className="tech_icon">
                        <TbTruckDelivery />
                      </div>
                      <p className="ml-2">
                        <span className="has-text-weight-semibold">
                          Data gathering&nbsp;
                        </span>
                        by managing and tracking Plant And Machinery.
                      </p>
                    </Space>
                    <Space direction="horizontal" className="mt-5 blue_color">
                      <div className="tech_icon">
                        <GiHealingShield />
                      </div>
                      <p className="ml-2">
                        <span className="has-text-weight-semibold">
                          Monitoring Preventive Maintenaince &nbsp;
                        </span>
                        by tracking their run-time and managing health status.
                      </p>
                    </Space>
                  </div>
                </div>
              </Col>
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col
                xxl={11}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className="my-auto "
              >
                <div>
                  <img
                    src="Sources/images/expertise/tech/3.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          {/* <div className="section_padding"></div> */}
        </section>

        <section className="mobile_margin">
          {/* <div className="section_padding"></div> */}
          <div className="container">
            <Row>
              {width > 768 && (
                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto "
                >
                  <div>
                    <img
                      src="Sources/images/expertise/tech/4.png"
                      alt="404 - Not Given"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Col>
              )}
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  <p className="is-size-3 blue_color has-text-weight-semibold mb-3">
                    MACHINE LEARNING
                  </p>
                  <div className="mt-3">
                    <Space direction="horizontal" className="mt-5 blue_color">
                      <div className="tech_icon">
                        <MdLiveTv />
                      </div>
                      <p className="ml-2">
                        <span className="has-text-weight-semibold">
                          Automated Video Monitoring&nbsp;
                        </span>
                        with real time Object Tracking.
                      </p>
                    </Space>
                    <Space direction="horizontal" className="mt-5 blue_color">
                      <div className="tech_icon">
                        <FaWarehouse />
                      </div>
                      <p className="ml-2">
                        <span className="has-text-weight-semibold">
                          Enhanced Data Analytics&nbsp;
                        </span>
                        using Machine Learning based Algorithmic approach.
                      </p>
                    </Space>
                  </div>
                </div>
              </Col>
              {width < 769 && (
                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto "
                >
                  <div>
                    <img
                      src="Sources/images/expertise/tech/4.png"
                      alt="404 - Not Given"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Col>
              )}
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};

export default Services;

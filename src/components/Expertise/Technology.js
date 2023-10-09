import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row, Space } from "antd";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiBulldozer } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { BsHandThumbsUp } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoMdFingerPrint } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import { MdOutlineAlarmOn } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { GiHealingShield } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header/header";
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
const Technology = () => {
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
        src="Sources/images/bg/Residential (12).png"
        alt="404 -Not Given"
        className="about_img"
        //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />
      <Header />
      <section className="mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <div className="has-text-centered">
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
              Focusing on the Right Technology
            </p>
            <p>
              Continually developing information systems to improve our work by
              focusing on Latest Technologies and being the pioneer in
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
                decades of construction industry experience into one, integrated
                system. Going beyond traditional construction management
                software, our ERP combines Analytics to Documentation to
                Planning, all the things at one place within one click. It also
                incorporates document, content, and business process management
                capabilities apart from:
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
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
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
                Hi-Mapp is Hitech's productivity app helping teams to deliver on
                time. Hi-Mapp provides users the ease of mobility. Hi-Mapp
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
                    by providing HRMS functionalities to them at the fingertips.
                  </p>
                </Space>
              </div>
            </Col>
            {width < 769 && (
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
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
                  Tracking to Data collections from IoT enabled devices, Hitech
                  is adapting to the latest trends in IoT.
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
            <Col xxl={11} lg={11} md={24} sm={24} xs={24} className="my-auto ">
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
              <Col xxl={11} lg={11} md={24} sm={24} xs={24} className="my-auto">
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
    </>
  );
};
export default Technology;

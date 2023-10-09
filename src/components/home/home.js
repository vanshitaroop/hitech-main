import React, { useEffect, useState, Component } from "react";
import { Button, Col, Row, Space } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import { MdOutlineCorporateFare } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import { RiBuilding2Fill } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineInteraction } from "react-icons/ai";
import { MdConstruction } from "react-icons/md";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { url } from "../../constants/navhome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Meta from "antd/lib/card/Meta";
import img1 from "./images/quality.png";
import img2 from "./images/team.png";
import img3 from "./images/workforce.png";
import img4 from "./images/construction.png";
import img5 from "./images/completed-task.png";
import img6 from "./images/building.png";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../header/header";

const valueparameter = [
  {
    iconone: <RiTeamLine className="is-size-2" />,
    titleone: "People",
    icontwo: <RiTeamLine className="is-size-2" />,
    titletwo: "People",
    des: "We believe in creating a culture of leadership, accountability & competence.",
    button: "Our Team",
    paramlink: url.management,
  },
  {
    iconone: <AiOutlineInteraction className="is-size-2" />,
    titleone: "Process",
    icontwo: <AiOutlineInteraction className="is-size-2" />,
    titletwo: "Process",
    des: "Our process & expertise ensures quality and timely delivery irrespective of the project size.",
    button: "Our Service",
    paramlink: url.services,
  },
  {
    iconone: <AiOutlinePropertySafety className="is-size-2" />,
    titleone: "Standards",
    icontwo: <AiOutlinePropertySafety className="is-size-2" />,
    titletwo: "Standards",
    des: "A Proven record of following best quality, safety standards and training practices in the construction industry.",
    button: "Standards",
    paramlink: url.standards,
  },
  {
    iconone: <MdConstruction className="is-size-2" />,
    titleone: "Technology",
    icontwo: <MdConstruction className="is-size-2" />,
    titletwo: "Technology",
    des: "We promptly embrace state of the art construction technologies and enable our proceses with Information Technology",
    button: "Our Technology",
    paramlink: url.services,
  },
];
const carousel = [
  {
    src: "Sources/images/carousel/1.png",
  },
  {
    src: "Sources/images/carousel/2.png",
  },
  // {
  //   src: "Sources/images/carousel/3.png",
  // },
];
const imagegallery = [
  {
    src: "Sources/images/gallery/1.png",
    title: "Entrance lounge",
    des: "In the entrance lounge dreams take flight and anticipation fills the air.",
  },
  {
    src: "Sources/images/gallery/2.png",
    title: "New Head Office",
    des: "As far as top quality construction goes, we stand tall-literally.",
  },
  {
    src: "Sources/images/gallery/3.png",
    title: "workspace",
    des: "“We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.”",
  },
  {
    src: "Sources/images/gallery/4.png",
    title: "Cafeteria",
    des: "As far as top quality construction goes, we stand tall-literally.",
  },
  {
    src: "Sources/images/gallery/5.png",
    title: "",
    des: "Hitech Projects celebrated 25 successful years of its entrepreneurial journey of growth in the construction industry by moving into a spacious new office.",
  },

  {
    src: "Sources/images/gallery/6.png",
    title: "Executive lounge",
    des: "Relationships are the only thing that matter business in life.",
  },
  {
    src: "Sources/images/gallery/7.png",
    title: "workspace",
    des: "In your workspace, surround yourself with objects that bring you joy and ignite your creativity.",
  },
  {
    src: "Sources/images/gallery/8.png",
    title: "reception",
    des: "We express gratitude to all our business partners and stakeholders who have supported us throughout this exciting journey.",
  },
  {
    src: "Sources/images/gallery/9.png",
    title: "Training room",
    des: "Success in business requires: Training, Discipline, Hard Work",
  },
];
const statslist = [
  {
    src: "Sources/images/achievements/quality.png",
    title: "Years of Experience",
    content: "25+",
  },
  {
    src: "Sources/images/achievements/team.png",
    title: "Team Members",
    content: "500+",
  },
  {
    src: "Sources/images/achievements/workforce.png",
    title: "Workforce",
    content: "3000+",
  },
  {
    src: "Sources/images/achievements/construction.png",
    title: "Total Constructed Area",
    content: "25Mn+ Sqft",
  },
  {
    src: "Sources/images/achievements/completed-task.png",
    title: "Completed Projects",
    content: "100+",
  },
  {
    src: "Sources/images/achievements/building.png",
    title: "Ongoing Projects",
    content: "20+",
  },
];

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  let cols = 6;
  if (width < 600) {
    cols = 2;
  } else if (width < 1200) {
    cols = 3;
  }

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="banner_carousel">
        <div className="container is-fluid">
          {/* <div>
            <Slider {...settings}>
              {carousel.map((item, key) => {
                return (
                  <div>
                    <img src={item.src} alt="404 - Not Given" />
                  </div>
                );
              })}
            </Slider>
          </div> */}
          <Carousel
            className="carousal_height"
            autoPlay={true}
            infiniteLoop={true}
            emulateTouch={true}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
          >
            {carousel.map((item, key) => {
              return (
                <div>
                  <img src={item.src} alt="404 - Not Given" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      <div className="home-page-bg">
        <Header />
        <section className="aboutus mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <Row>
              <Col
                xxl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="my-auto"
                style={{ textAlign: "center" }}
              >
                <img
                  src="Sources/images/home_img.png"
                  alt="404 -Not Given"
                  className="about_img"
                />
              </Col>
              <Col
                xxl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="my-auto about_content"
              >
                <div
                  style={{
                    padding: width > 1024 ? "50px" : "0px",
                  }}
                >
                  <div className="sectional_heading">
                    <p className="is-size-2 has-text-weight-semibold pt-3">
                      We are&nbsp;
                      <span className="blue_color has-text-weight-semibold">
                        Hitech
                      </span>
                    </p>
                  </div>
                  {/* <p className="has-text-left pt-4">
                    Hitech took that step in 1996, since when it has quietly
                    marched to emerge as one of the leading construction
                    companies in Ahmedabad.
                  </p>
                  <br />
                  <p className="has-text-left">
                    Hitech, one of the most successful and efficient
                    organization has a varied portfolio of :- Industrial
                    Structures - Residential Buildings - Commercial Buildings -
                    Institutional & other Buildings.
                  </p>
                  <br /> */}
                  {/* <p className="has-text-left">
                  Hitech has a proven track record of delivering quality on
                  time, for every project. It is one of the few construction
                  companies in Ahmedabad with quality system certification ISO
                  9001:2015 and Govt. of Gujarat approved 'AA' class special
                  category - I (Buildings).
                </p>
                <br />
                <p className="has-text-left">
                  Together with our customers, we deliver landmark projects that
                  foster long-term progress and economic growth. We've completed
                  many extraordinary projects—many first-of-a-kind.
                </p> */}
                  <p className="has-text-left">
                    {/* Our dedication to delivering high-quality projects on time
                    has led to obtaining the ISO 9001 certification for quality
                    management. Additionally, we have achieved the ISO 45001
                    certification, demonstrating our commitment to upholding the
                    highest EHS standards in the industry. We have also been
                    recognized as a &#39;AA&#39; class special category - I
                    (Buildings) by the Govt. of Gujarat. */}
                    Since its inception in 1996, Hitech has been a cornerstone
                    in Ahmedabad's construction industry. With certifications
                    like ISO 9001:2015 and ISO 45001, we set the bar high for
                    quality and safety. Our portfolio is diverse, covering
                    industrial constructions, residential developments,
                    commercial properties, and institutional buildings. <br />
                    <br />
                    We are honored to be classified as a 'AA' special category -
                    I (Buildings) contractor by the Government of Gujarat. Our
                    mission is to create enduring partnerships and
                    transformative projects that stand as testaments to our
                    commitment to excellence. We believe in not just building
                    structures, but also in building relationships and
                    communities.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>
        <section className="home_achievements">
          <p
            className="is-size-2 has-text-weight-semibold has-text-centered mt-2"
            style={{ color: "white" }}
          >
            Our Achievements
          </p>
          <Row
            style={{ textAlign: "center", marginTop: "1rem" }}
            className="container"
          >
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img1} alt="" className="mb-4" />

              <h6>Years of Experience</h6>
              <h6>25+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img2} alt="" className="mb-4" />
              <h6> Team Members</h6>
              <h6>500+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img3} alt="" className="mb-4" />
              <h6>Workforce</h6>
              <h6>3000+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img4} alt="" className="mb-4" />
              <h6> Total Constructed Area</h6>
              <h6>25Mn+ Sqft</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img5} alt="" className="mb-4" />
              <h6>Completed Projects</h6>
              <h6>100+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img6} alt="" className="mb-4" />
              <h6> Ongoing Projects</h6>
              <h6>20+</h6>
            </Col>
          </Row>
        </section>
        <section className="our_projects mobile_margin">
          <div className="section_padding"></div>
          <p
            className="is-size-2 has-text-weight-semibold blue_color"
            style={{ textAlign: "center" }}
          >
            Our Projects
          </p>
          <div className="section_padding"></div>
          <div className="container">
            {/* <Row> */}
            {/* <Col xxl={12} lg={12} md={12} sm={24} xs={24} className="my-auto">
              <div>
                <p className="is-size-2 has-text-weight-semibold blue_color">
                  Our Projects
                </p>
                <p className="has-text-left pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nisl enim, fermentum ut erat sed, rhoncus posuere
                  nibh. Nulla vulputate hendrerit fringilla. Curabitur placerat
                  vehicula nisl, id tempor est elementum vel.
                </p>
              </div>
            </Col> */}

            <Col xxl={24} lg={24} md={24} sm={24} xs={24}>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                  <Link to={url.residential}>
                    <div className="project_box">
                      <GiFamilyHouse className="is-size-1 blue_color" />
                      <p>Residential</p>
                    </div>
                  </Link>
                </Col>
                <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                  <Link to={url.commercial}>
                    <div className="project_box">
                      <RiBuilding2Fill className="is-size-1 blue_color" />
                      <p>Commercial</p>
                    </div>
                  </Link>
                </Col>
              </Row>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                  <Link to={url.industrial}>
                    <div className="project_box">
                      <TbBuildingFactory className="is-size-1 blue_color" />
                      <p>Industrial</p>
                    </div>
                  </Link>
                </Col>
                <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                  <Link to={url.institutionalprojects}>
                    <div className="project_box">
                      <MdOutlineCorporateFare className="is-size-1 blue_color" />
                      <p>Institutional & Corporate</p>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
            {/* <Col xxl={12} lg={12} md={12} sm={24} xs={24} className="my-auto">
              <iframe
                title="residential"
                src="https://www.google.com/maps/d/embed?mid=1ihvxpz8rcaJOYZnxQ43yIkeet9usr3w&amp;ehbc=2E312F"
                width="100%"
                height="480"
              ></iframe>
            </Col> */}
            {/* </Row> */}
          </div>
          <div className="section_padding"></div>
        </section>
        <section>
          <div className="section_padding"></div>
          <div className="container">
            <Row style={{ display: "flex", justifyContent: "center" }}>
              {imagegallery.map((item, key) => {
                return (
                  <Col
                    xxl={8}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="card_gallery_warpper">
                      <div className="card_gallery">
                        <div className="content">
                          <div className="front">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                          <div className="back">
                            <p className="is-size-6 has-text-centered gallery_title1 is-uppercase">
                              {item.title}
                            </p>
                            <p className="is-size-7 has-text-centered gallery_title2">
                              {item.des}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>
        <section className="value_parameter">
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-2 has-text-weight-semibold has-text-centered mb-5 has-text-white">
                Our Value Creation Parameters
              </p>
            </div>
            <div>
              <Row>
                {valueparameter.map((item, key) => {
                  return (
                    <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
                      <div
                        className="single-service has-text-centered"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="service-hidding-and-icon">
                          <div className="service-icon">{item.iconone}</div>
                          <p className="is-size-5 is-uppercase has-text-weight-semibold mb-3">
                            {item.titleone}
                          </p>
                        </div>
                        <div className="service-details">
                          <div className="service-icon">{item.icontwo}</div>
                          <p className="is-size-5 is-uppercase has-text-weight-semibold mb-3">
                            {item.titletwo}
                          </p>
                          <p className="is-size-6 mb-2">{item.des}</p>
                          <Link
                            to={item.paramlink}
                            className="is-size-6 has-text-white has-text-weight-semibold"
                          >
                            <Space direction="horizontal">
                              {item.button}
                              <HiArrowNarrowRight />
                            </Space>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  );
                })}
                {/* <Col xxl={6} lg={6} md={24} sm={24} xs={24}></Col>
              <Col xxl={6} lg={6} md={24} sm={24} xs={24}></Col>
              <Col xxl={6} lg={6} md={24} sm={24} xs={24}></Col> */}
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>
        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-3 blue_color has-text-centered has-text-weight-semibold">
                Looking to Partner with Us?
              </p>
              <div className="has-text-centered mt-4">
                <Link to={url.Contact}>
                  <Button className="partnerbtn" size="large">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Col, Row, Space } from "antd";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { url } from "../../constants/navhome";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Layout } from "antd";

const clientlist = [
  { src: "Sources/images/our_client/1.png" },
  { src: "Sources/images/our_client/2.png" },
  { src: "Sources/images/our_client/3.png" },
  { src: "Sources/images/our_client/4.png" },
  { src: "Sources/images/our_client/5.png" },
  { src: "Sources/images/our_client/6.png" },
  { src: "Sources/images/our_client/7.png" },
  { src: "Sources/images/our_client/8.png" },
  { src: "Sources/images/our_client/9.png" },
  { src: "Sources/images/our_client/10.png" },
  { src: "Sources/images/our_client/11.png" },
  { src: "Sources/images/our_client/12.png" },
  { src: "Sources/images/our_client/13.png" },
  { src: "Sources/images/our_client/14.png" },
  { src: "Sources/images/our_client/15.png" },
  { src: "Sources/images/our_client/16.png" },
  { src: "Sources/images/our_client/17.png" },
  { src: "Sources/images/our_client/18.png" },
  { src: "Sources/images/our_client/19.png" },
  { src: "Sources/images/our_client/20.png" },
  { src: "Sources/images/our_client/21.png" },
  { src: "Sources/images/our_client/22.png" },
  { src: "Sources/images/our_client/23.png" },
  { src: "Sources/images/our_client/24.png" },
  { src: "Sources/images/our_client/25.png" },
  { src: "Sources/images/our_client/26.png" },
  { src: "Sources/images/our_client/27.png" },
  { src: "Sources/images/our_client/28.png" },
  { src: "Sources/images/our_client/29.png" },
  { src: "Sources/images/our_client/30.png" },
  { src: "Sources/images/our_client/31.png" },
  { src: "Sources/images/our_client/32.png" },
  { src: "Sources/images/our_client/33.png" },
  { src: "Sources/images/our_client/34.png" },
  { src: "Sources/images/our_client/35.png" },
  { src: "Sources/images/our_client/36.png" },
  { src: "Sources/images/our_client/37.png" },
  { src: "Sources/images/our_client/38.png" },
  { src: "Sources/images/our_client/39.png" },
  { src: "Sources/images/our_client/40.png" },
  { src: "Sources/images/our_client/41.png" },
  { src: "Sources/images/our_client/42.png" },
];

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
      {/* <section className="upper_foot">
        <div className="upper_footer bg">
          <div className="container">
            <Row justify="start" className="mt-5">
              <Col
                xxl={8}
                lg={8}
                md={8}
                sm={24}
                xs={24}
                className="mb-5 is-flex is-justify-content-center"
              >
                <div className="call_us">
                  <div className="call_img">
                    <MdLocationOn className="has-text-white icon color" />
                  </div>
                  <div className="call_text">
                    <h4>AHMEDABAD</h4>
                    <h6>169 Kms( approx)</h6>
                  </div>
                </div>
              </Col>
              <Col
                xxl={8}
                lg={8}
                md={8}
                sm={24}
                xs={24}
                className="mb-5 is-flex is-justify-content-center"
              >
                <div className="call_us">
                  <div className="call_img">
                    <MdLocationOn className="icon has-text-white" />
                  </div>
                  <div className="call_text">
                    <h4>
                      <a
                        href="mailto:rajmahaldevgadhbaria@gmail.com"
                        className="has-text-white"
                      >
                        VADODARA
                      </a>
                    </h4>
                    <h6>103 Kms (approx)</h6>
                  </div>
                </div>
              </Col>
              <Col
                xxl={8}
                lg={8}
                md={8}
                sm={24}
                xs={24}
                className="mb-5 is-flex is-justify-content-center"
              >
                <div className="call_us">
                  <div className="call_img">
                    <MdLocationOn className="icon has-text-white" />
                  </div>
                  <div className="call_text">
                    <h4>SURAT</h4>
                    <h6>169 Kms (approx)</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section> */}
      {/* <section className="mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <Slider {...settings}>
              {clientlist.map((item, key) => {
                return (
                  <div>
                    <img src={item.src} alt="404 - Not Given" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="section_padding"></div>
      </section> */}
      <AntFooter className="main_footer">
        {/* <div className="section_padding"></div> */}
        <div className="container">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="first_col">
                <div className="footer_line">
                  <h3 className="is-size-5 has-text-weight-semibold pb-4 mt-3 has-text-white footer_heading">
                    QUICK LINKS
                  </h3>
                </div>
                <div>
                  <Row className="mt-5">
                    <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                      <ul className="quick_link">
                        <li className="footer_link">
                          <Link to={url.home} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Home</span>
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link to={url.whoweare} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">About Us</span>
                          </Link>
                        </li>
                        {/* <li className="footer_link">
                          <Link to={url.expertise} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Expertise</span>
                          </Link>
                        </li> */}
                        <li className="footer_link">
                          <Link to={url.services} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Services</span>
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link to={url.careers} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Careers</span>
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link to={url.Contact} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Contact Us</span>
                          </Link>
                        </li>
                      </ul>
                    </Col>
                    <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                      <ul className="quick_link">
                        <li className="footer_link">
                          <Link to={url.residential} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Residential</span>
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link to={url.commercial} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Commercial</span>
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link to={url.industrial} className="has-text-white">
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">Industrial</span>
                          </Link>
                        </li>
                        <li className="footer_link">
                          <Link
                            to={url.institutionalprojects}
                            className="has-text-white"
                          >
                            <MdArrowForwardIos className="arrow_icon " />
                            <span className="pl-2">
                              Institutional & Corporate
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className="footer_colum"
            >
              <div className="second_col" style={{ marginLeft: "0px" }}>
                <div className="footer_line">
                  <h3 className="is-size-5 has-text-weight-semibold pb-4 mt-3 has-text-white footer_heading">
                    Address
                  </h3>
                </div>
                <div className="footer_address mt-5">
                  <a
                    href="https://www.google.com/maps/place/Hitech+Projects+Private+Limited/@22.9975806,72.4969546,17z/data=!3m1!4b1!4m5!3m4!1s0x395e9b475ef7e48d:0x922a96c8de37de3a!8m2!3d22.9975739!4d72.4991428"
                    target="_blank"
                    className="has-text-white contact_content"
                  >
                    <p className="my-auto">Hitech Projects Pvt. Ltd.</p>
                    <p className="mt-2">A-1401, Block-A, </p>
                    <p>West Gate Business Bay,</p>
                    <p>Besides Signature - 1, S.G. Highway,</p>
                    <p> Makarba, Ahmedabad - 380051. </p>
                    <p>Gujarat, India</p>
                  </a>
                </div>
              </div>
            </Col>
            {/* <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className="footer_colum"
            >
              <div className="third_col">
                <div className="footer_line">
                  <p className="is-size-5 has-text-weight-semibold pb-4 mt-3 has-text-white footer_heading">
                    CONTACT US
                  </p>
                </div>
                <div className="mt-5">
                  <div>
                    <ul>
                      <li className="footer_link">
                        <Space direction="horizontal">
                          <BiPhoneCall className="arrow_icon is-size-4" />
                          <div>
                            <a
                              href="tel:+91 9904592200"
                              className="has-text-white"
                            >
                              <span className="pl-2">+91-9904592200 /</span>
                            </a>
                            <a
                              href="tel:+91 9904288900"
                              className="has-text-white"
                            >
                              <span className="pl-2">+91-9904288900</span>
                            </a>
                          </div>
                        </Space>
                      </li>
                      <li className="footer_link">
                        <Space direction="horizontal">
                          <AiOutlineMail className="arrow_icon is-size-4" />
                          <a
                            href="mailto:info@hitechprojects.co.in"
                            className="has-text-white"
                          >
                            <span className="pl-2">
                              info@hitechprojects.co.in
                            </span>
                          </a>
                        </Space>
                      </li>
                    </ul>
                  </div>
                  <div className="social_icon">
                    <a
                      className="has-text-white"
                      href="https://www.linkedin.com/company/hitechprojects/"
                      target="blank"
                    >
                      <ImLinkedin className="is-size-4" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://www.instagram.com/hitechpplofficial/"
                      target="blank"
                    >
                      <ImInstagram className="is-size-4 ml-3" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://www.facebook.com/hitechpplofficial/"
                      target="blank"
                    >
                      <ImFacebook2 className="is-size-4 ml-3" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://twitter.com/hitechppl"
                      target="blank"
                    >
                      <ImTwitter className="is-size-4 ml-3" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://www.youtube.com/channel/UCbrjSl-jZB23ZB8HzSNqa8w"
                      target="blank"
                    >
                      <ImYoutube className="is-size-4 ml-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Col> */}
            {/* <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
              <iframe
                title="Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7361.401796299187!2d73.91102953488769!3d22.702175800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3960f235596915db%3A0xb11801dc88fd7f55!2sDevgadh%20Baria%2C%20Gujarat%20389380!5e0!3m2!1sen!2sin!4v1661860686358!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col> */}
          </Row>
        </div>
        <div className="container">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="third_col">
                <div className="footer_line">
                  <p className="is-size-5 has-text-weight-semibold pb-4 mt-3 has-text-white footer_heading">
                    Certifications
                  </p>
                </div>
                <div className="footer_address mt-5">
                  <p className="mt-2">ISO 9001</p>
                  <p>ISO 45001</p>
                </div>
              </div>
            </Col>
            <Col
              xxl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className="footer_colum"
            >
              <div className="second-col" style={{ marginTop: "0px" }}>
                <div className="footer_line">
                  <h3 className="is-size-5 has-text-weight-semibold pb-4 mt-3 has-text-white footer_heading">
                    Contact Us
                  </h3>
                </div>
                <div className="mt-5">
                  <div>
                    <ul>
                      <li className="footer_link">
                        <Space direction="horizontal">
                          <BiPhoneCall className="arrow_icon is-size-4" />
                          <div>
                            <a
                              href="tel:+91 9904592200"
                              className="has-text-white"
                            >
                              <span className="pl-2">+91-9904592200 /</span>
                            </a>

                            <a
                              href="tel:+91 9904288900"
                              className="has-text-white"
                            >
                              <span className="pl-2">+91-9904288900</span>
                            </a>
                          </div>
                        </Space>
                      </li>
                      <li className="footer_link">
                        <Space direction="horizontal">
                          <AiOutlineMail className="arrow_icon is-size-4" />
                          <a
                            href="mailto:info@hitechprojects.co.in"
                            className="has-text-white"
                          >
                            <span className="pl-2">
                              info@hitechprojects.co.in
                            </span>
                          </a>
                        </Space>
                      </li>
                    </ul>
                  </div>
                  <div className="social_icon">
                    <a
                      className="has-text-white"
                      href="https://www.linkedin.com/company/hitechprojects/"
                      target="blank"
                    >
                      <ImLinkedin className="is-size-4" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://www.instagram.com/hitech_pvt_ltd/?igshid=MzRlODBiNWFlZA%3D%3D"
                      target="blank"
                    >
                      <ImInstagram className="is-size-4 ml-3" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://www.facebook.com/hitechpplofficial/"
                      target="blank"
                    >
                      <ImFacebook2 className="is-size-4 ml-3" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://twitter.com/hitechppl"
                      target="blank"
                    >
                      <ImTwitter className="is-size-4 ml-3" />
                    </a>
                    <a
                      className="has-text-white"
                      href="https://www.youtube.com/channel/UCbrjSl-jZB23ZB8HzSNqa8w"
                      target="blank"
                    >
                      <ImYoutube className="is-size-4 ml-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <div className="section_padding"></div> */}
      </AntFooter>
      <hr className="footerhr" />
      <section className="lower_foot bluebg_color">
        <div className="lower_footer">
          <div className="container py-4">
            <p className="is-size-6 has-text-white lower_text has-text-centered">
              @2022&nbsp;
              <a
                href="https://outleadsolutions.com/"
                className="has-text-white"
                target="blank"
              >
                Outlead solution.&nbsp;
              </a>
              All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;

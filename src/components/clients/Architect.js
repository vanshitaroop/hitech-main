import React from "react";
import { Col, Row } from "antd";
import Header from "../header/header";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";

const consultantslist = [
  { src: "Sources/images/consultants/2.png" },
  { src: "Sources/images/consultants/3.png" },
  { src: "Sources/images/consultants/4.png" },
  { src: "Sources/images/consultants/5.png" },
  { src: "Sources/images/consultants/6.png" },
  { src: "Sources/images/consultants/7.png" },
  { src: "Sources/images/consultants/8.png" },
  { src: "Sources/images/consultants/9.png" },
  { src: "Sources/images/consultants/10.png" },
  { src: "Sources/images/consultants/11.png" },
  { src: "Sources/images/consultants/12.png" },
  { src: "Sources/images/consultants/13.png" },
  { src: "Sources/images/consultants/14.png" },
  { src: "Sources/images/consultants/15.png" },
  { src: "Sources/images/consultants/16.png" },
  { src: "Sources/images/consultants/17.png" },
  { src: "Sources/images/consultants/18.png" },
  { src: "Sources/images/consultants/19.png" },
  { src: "Sources/images/consultants/20.png" },
  { src: "Sources/images/consultants/21.png" },
  { src: "Sources/images/consultants/22.png" },
  { src: "Sources/images/consultants/23.png" },
  { src: "Sources/images/consultants/24.png" },
  { src: "Sources/images/consultants/25.png" },
  { src: "Sources/images/consultants/26.png" },
  { src: "Sources/images/consultants/27.png" },
  { src: "Sources/images/consultants/28.png" },
  { src: "Sources/images/consultants/29.png" },
  { src: "Sources/images/consultants/30.png" },
  { src: "Sources/images/consultants/31.png" },
  { src: "Sources/images/consultants/32.png" },
  { src: "Sources/images/consultants/33.png" },
  { src: "Sources/images/consultants/34.png" },
  { src: "Sources/images/consultants/35.png" },
  { src: "Sources/images/consultants/36.png" },
  { src: "Sources/images/consultants/37.png" },
  { src: "Sources/images/consultants/38.png" },
  { src: "Sources/images/consultants/39.png" },
];
const testimonial = [
  {
    review:
      "“Amaya historically constructed its own buildings. When we had to plan the execution strategy for our marquee, 70m tall residential building ONE49, we decided to evaluate contractors who were up to the challenge, would be able to construct the building as per our expectations within a tight timeline and without compromising safety or quality. After evaluating many candidates, we decided to award the contract to Hi Tech Projects Pvt. Ltd. Throughout the construction process, we found them to be professional and supportive. They deployed the required resources to ensure timely construction and paid close attention to safety and quality. They worked closely with our PMC team to work as ‘One Team’. We are pleased with the positive attitude and commitments shown by the promoters of the company throughout the construction process. We would be pleased to work with them in the future and happy to recommend them to anyone who is looking to construct quality buildings.”",
    clientname: "Mr. Shaan Zaveri",
    clientdesignation: "Partner, Amaya Properties LLP",
  },
  {
    review:
      "“We are very happy with the services provided by Hitech at our project Aavishkaar in Ahmedabad. They have been performing very well on all aspects of the development, be it quality, safety, or timeliness of delivery. What differentiates Hitech from other contractors is that they have a very professional way of working. They have experienced employees on site with cooperative and positive attitude. They have extensive MIS systems to track and manage work. They have established comprehensive systems/ processes such as regular training of workers, logistics plans, regular housekeeping etc. We highly recommend Hitech and wish them best for their future endeavours.”",
    clientname: "Mr. Kamal Singal",
    clientdesignation: "MD and CEO, Arvind Smartspaces Ltd.",
  },
  {
    review:
      "“No doubt, one of the best civil contracting firm in Gujarat. Technical expertise, Quality construction, well trained staff, organized set-up and emphasis on safety are few of their plus points. For us they are not only contractors but are like our core construction partners. Happy and pleased to be working together.”",
    clientname: "Mr. Deep Patel",
    clientdesignation: "Director, Sun Builders",
  },
  {
    review:
      "“Hitech’s approach to construction is well-organized and systematic. Their commitment towards deliverables, quality and safety is commendable. Hitech has executed our past projects and we would like to be associated with the company for future projects too.”",
    clientname: "Mr. Pilak Shah",
    clientdesignation: "Director, Harsha Engineers Ltd.",
  },
  {
    review:
      "“We're happy with Hitech Projects Pvt Ltd for their exceptional work on the Shivalik Shilp 2 project. Their unwavering commitment to quality, safety, and punctuality, along with their teamwork and problem-solving skills, truly impressed us. Their internal monitoring system was key to the project's success. We wholeheartedly recommend Hitech for their outstanding contributions in the construction sector.”",
    clientname: "Mr. Yash Brahmbhatt",
    clientdesignation: "Founder and CEO, Shilp Group",
  },
];
const Architech = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <img
        src="Sources/images/our_client/clients.JPG"
        alt="404 -Not Given"
        className="about_img"
        //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />
      <Header />
      <section>
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
              Architect And Consultants
            </p>
            <p className="is-size-6 has-text-centered mb-3">
              We work closely with a wide range of Architect and Consultants
              from different sectors and regions. These are just some of the
              people we’re proud to work with:
            </p>
          </div>
          <div>
            <Row>
              {consultantslist.map((item, key) => {
                return (
                  <Col xxl={4} lg={4} md={6} sm={12} xs={12}>
                    <div className="client_logo">
                      <img src={item.src} alt="404 - Not Given" />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
      <section>
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color">
              Testimonials
            </p>
          </div>
          <div>
            <Slider {...settings}>
              {testimonial.map((item, key) => {
                return (
                  <div>
                    <div className="testimonials has-text-centered">
                      <div className="testcontent_wrapper">
                        <FaQuoteLeft
                          className="is-size-1 mb-3"
                          style={{ color: "#e30016" }}
                        />
                        <p className="is-size-6 testimonial_content">
                          {item.review}
                        </p>
                      </div>
                      <div className="is-flex is-justify-content-center">
                        <div className="line"></div>
                      </div>
                      <p className="is-size-4 has-text-weight-semibold">
                        {item.clientname}
                      </p>
                      <p className="is-size-6 mt-2">{item.clientdesignation}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Architech;

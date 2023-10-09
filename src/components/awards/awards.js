import { Card, Col, Image, Row } from "antd";
import React from "react";
import Header from "../header/header";

const awardscard = [
  {
    src: "Sources/images/awards/13.jpg",
    title: "ISO Certificate 9001-2015",
    des: "Successful completion of annual periodic audits",
  },
  {
    src: "Sources/images/awards/14.jpg",
    title: "ISO 45001 EHS Structure Certificate-2018",
    des: "Successful completion of annual periodic audits",
  },
  {
    src: "Sources/images/awards/Banyan.jpg",
    title: "Structure Award",
    des: "Project “THE BANYAN” was awarded for Outstanding Structure at State Level in Mass Housing category ( < 100)",
  },
  {
    src: "Sources/images/awards/High Temp.jpg",
    title: "Structure Award",
    des: "Project “HIGH TEMP FURNACES” was awarded for Outstanding Structure at Regional Level North Gujarat in Industrial category",
  },
  {
    src: "Sources/images/awards/1.png",
    title: "Structure Award",
    des: "Project “SUN EVOQ” was awarded for Outstanding Structure at Regional Level North Gujarat in Mass Housing category ( < 100)",
  },
  {
    src: "Sources/images/awards/5.png",
    title: "Safety Award",
    des: "Received award/certificate from Ahmedabad one mall for achieving 1 lakh safe man hours without LTI",
  },
  {
    src: "Sources/images/awards/6.png",
    title: "Safety Award",
    des: "Received award/certificate from CQRA for achieving 1 million safe man hours without LTI at one 49 site",
  },
  {
    src: "Sources/images/awards/7.jpg",
    title: "Safety Award",
    des: "The Achievement of One Lakh safe man-hours without lost time injuiry (LTI)",
  },
  {
    src: "Sources/images/awards/8.jpg",
    title: "Safety Award",
    des: "Achivement Award for construction health safety & Environment",
  },
  {
    src: "Sources/images/awards/9.jpg",
    title: "Safety Award",
    des: "The Achivement of 1 million safe man-hours for their propjects ONE49 site",
  },
  {
    src: "Sources/images/awards/10.jpg",
    title: "Safety Award",
    des: "The Achivement of Half million safe man-hours for their propjects ONE49 site",
  },
  {
    src: "Sources/images/awards/11.JPG",
    title: "Safety Award",
    des: "The winning of ICI-UltraTech Outstanding Stucture Awards 2020 (Regional) in the category Indistrial Buildings",
  },
  {
    src: "Sources/images/awards/12.jpg",
    title: "Structure Award",
    des: "Project “ICI” was awarded for Outstanding Structure Award 2020 at North Gujarat",
  },

  {
    src: "Sources/images/awards/15.jpg",
    title: "Safety Award",
    des: "Project “UNICHARM” for Completing 1 Lakh safe man hours sanand site  ",
  },
  {
    src: "Sources/images/awards/16.JPG",
    title: "Structure Award",
    des: "The winning of ICI-UltraTech Outstanding Stucture Awards 2020 (Regional) in the category Mass Housing",
  },
  {
    src: "Sources/images/awards/17.JPG",
    title: "Structure Award",
    des: "Project “ICI” was awarded for Outstanding Structure Award 2020 in the category Mass housing",
  },
  {
    src: "Sources/images/awards/18.JPG",
    title: "Structure Award",
    des: "Project “ICI-UltraTech” was awarded for Outstanding Structure Award 2020 in the category Mass housing",
  },
  {
    src: "Sources/images/awards/19.jpg",
    title: "Structure Award",
    des: "Project “ICI-UltraTech” was awarded for Outstanding Structure Award 2020 in the category Mass housing",
  },
];

const Awards = () => {
  return (
    <>
      <img
        src="Sources/images/awards/awards.JPG"
        alt="404 -Not Given"
        className="about_img"
        //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="about-us-bg">
        <Header />
        <section>
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-5">
                Awards And Certifications
              </p>
              {/* <p className="is-size-4 has-text-centered mb-3">Year 2020</p> */}
              <p className="is-size-5 has-text-centered mt-3">
                {/* Our company has been felicitated with the Indian Concrete
              Institute-Ultra Tech Outstanding Structure Awards 2020 at State
              And Regional Level. */}
                The many talented and devoted workers at Hitech are responsible
                for the numerous awards and recognition <br />
                we have received throughout the years.
              </p>
            </div>
            <div>
              <img src="Sources/images/awards/4.png" alt="404 - Not Found" />
            </div>
            <div>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                {awardscard.map((item, key) => {
                  return (
                    <Col
                      xxl={8}
                      lg={8}
                      md={12}
                      sm={24}
                      xs={24}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card className="awardcard">
                        <div className="has-text-centered service_icon">
                          <div>
                            <Image
                              src={item.src}
                              alt="404 - Not Found"
                              style={{ height: "25vh", width: "100%" }}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="is-size-5 has-text-weight-semibold has-text-centered mt-4 blue_color">
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
      </div>
    </>
  );
};

export default Awards;

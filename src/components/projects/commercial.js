import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import Header from "../header/header";

const commerciallist = [
 
  // {
  //   src: "",
  //   title:"Sharanam Metrolink",
  //   content: "...",
  //   client: "Sharanam Metrolink LLP",
  //   location: "Khokhara, Ahmedabad",
  //   projectSize: "4,91,032 Sq. ft.",
  //   projectDes: "2 Floors, 12 Meters",
  //   projectYear: "2020-Current",
  //   architect: "99 Studio",
  //   consultant: "Shreeji Consultant",
  //   scope: "Civil Construction with finishing work of Commercial Building of B+G+4 storey (7 Blocks) and B+G+5 storey (2 Blocks).",
  // },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/1-1.jpeg",
    title: "SHARANAM SQUARE",
    content: "...",
    client: "SHARANAM SQUARE LLP",
    location: "Khokhara, Ahmedabad",
    projectSize: "2,75,000 Sq. ft.",
    projectDes: "2 Floors, 12 Meters",
    projectYear: "2022-Current",
    architect: "99 Studio",
    consultant: "Shreeji Consultant",
    scope: "Civil Construction with Finishing Work of commercial building of B+G+2 storey (2 Blocks).",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/1-3.png",
    title: "REGALIA",
    content: "...",
    client: "Nakshatra Infracon",
    location: "GIFT City, Gandhinagar",
    projectSize: "526,000 Sq. ft.",
    projectDes: "29 Floors, 122 Meters",
    projectYear: "2022-Current",
    architect: "Neha Consultants",
    consultant: "J W Consultants LLP",
    scope: "Civil works, Masonry & Plaster, and Waterproofing.",
  },
 
  {
    src: "Sources/images/prouctlist/commercial/ongoing/1-4.png",
    title: "FLEXONE",
    content: "...",
    client: "Waystar Properties LLP",
    location: "GIFT City, Gandhinagar",
    projectSize: "563,000 Sq. ft.",
    projectDes: "20 Floors, 90 Meters",
    projectYear: "2022-Current",
    architect: "Studio ARA",
    consultant: "N K Shah Consulting LLP",
    scope: " RCC Framework, Finishing Work.",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/1-5.JPEG",
    title: "SHARNAM METROLINK",
    content: "Commercial projects at Khokhara, Ahmedabad",
    client: "Sharnam Metrolinks LLP",
    location: "Khokhara, Ahmedabad",
    projectSize:
      "4,91,000 Sq. ft. 7 Buildings (B+G+4 Floors) 2 Buildings (B+G+5 Floors)",
    projectDes: "5 Floors, 22.5 Meters",
    projectYear: "2022-Current",
    architect: "99 Studio",
    consultant: "S3M Design Consultants LLP",
    scope: "Structual Work, RCC Framework, Masonry ,Plaster , Painting.",
  },
];
const commercialcompleted = [
  {
    src: "Sources/images/prouctlist/commercial/ongoing/1-1.jpg",
    title: "THE PROFIT",
    content: "...",
    client: "The Building Company",
    location: "Adajan, Surat",
    projectSize: "159,174 Sq. ft.",
    projectDes: "10 Floors, 45 Meters",
    projectYear: "2022",
    architect: "Tathastu",
    consultant: "SNV Engineers",
    scope: " RCC Framework, Masonry,Plaster.",
  },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/2.png",
  //   title: "TORRENT POWER “B” STATION",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center (PSC), Customer service (CS), Plug point and other applied work at 'B' station premises, Katargam Surat.",
  //   client: "Torrent Power Ltd",
  //   projectSize: "1,11,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "S3M Design Consultants LLP",
  //   scope: "Civil Structure Work",
  // },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/3.png",
  //   title: "TORRENT POWER 'E' STATION",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center, TSD Workshop, Plug point and other applied work at 'E' station premises, Varachha Surat.",
  //   client: "Torrent Power Ltd",
  //   location: "Varachha, Surat",
  //   projectSize: "50,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "S3M Design Consultants LLP",
  //   scope: "Civil Structure Work",
  // },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/4.png",
  //   title: "TORRENT POWER LTD. ",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its HT PSC building and meter Lab building at Naranpura, Ahmedabad.",
  //   client: "Torrent Power Ltd",
  //   location: "NARANPURA",
  //   projectSize: "1,70,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "Ducon Consultant Pvt Ltd",
  //   scope: "Civil Structure Work with all services",
  // },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/5.png",
  //   title: "TORRENT POWER LTD.",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its PSC building And Plug point building at Odhav.",
  //   client: "Torrent Power Ltd",
  //   location:"Odhav, Gujarat",
  //   projectSize: "1,10,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: " Ducon Consultant Pvt Ltd",
  //   scope: "Civil Structure Work with all services",
  // },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/6.png",
  //   title: "WEST GATE 'E' BLOCK",
  //   client: "AADHAN BUILDERS LLP.",
  //   projectSize: "35,000 SQFT. (3B+GF +07 Floors)",
  //   projectYear: "2022-Current",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "-",
  //   scope: "Civil Structure Work with all services",
  // },
  {
    src: "Sources/images/prouctlist/commercial/completed/1.png",
    title: "AHMEDABAD ONE MALL-II",
    content:
      "Ahmedabad One mall (Nexus Malls, A group of Blackstone), is the city's iconic shopping destination and it entered into constructing phase2 building with wellknown F&B and Retail brands.",
    segment: "Corporate",
    client: "Ruchi Malls Pvt. Ltd.",
    location: "Vastrapur, Ahmedabad",
    projectSize: " 2,00,000 Sq. ft.",
    projectDes: "4 Floors, 15 Meters",
    projectYear: "2022",
    architect: "Bentel Associates",
    consultant: "TPC Technical Projects Consultants",
    scope: "RCC Framework , Masonry, Plaster, Fabrication.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/2.png",
    title: "KP EPITOME",
    content:
      "KP Epitome is a commercial development, providing perfectly built work spaces and commercial shops having 3 towers of 2B+G+14 And 8 towers of 2B+G+3.",
    segment: "Commercial",
    client: "Kish Developers",
    location: "Makarba, Ahmedabad",
    projectSize: "6,50,000 Sq. ft.",
    projectDes: "14 Floors, 45 Meters",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "P-Cube Consultant",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/13.jpg",
    title: "SUN WEST BANK",
    content:
      "Sun Westbank is one of the commercial developments offering spacious and skillfully designed office spaces and commercial shops.",
    segment: "Commercial",
    client: "Nirguna Infrastructure LLP",
    location: "Ashram Rd, Ahmedabad",
    projectSize: "6,50,000 Sq. ft.",
    projectDes: "13 Floors, 45 Meters",
    projectYear: "2021",
    architect: "HM Architect",
    consultant: "SETU Infrastructure",
    scope: "RCC Framework , Masonry , Plaster , MEP,Finishing Work.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/14.jpg",
    title: "SHARNAM SOLITAIRE",
    content:
      "A world class business centre designed to harness opportunities with its 3 Towers comprising of 1B+G+4 measuring upto a total of 2,80,000 sq ft.",
    segment: "Commercial",
    client: "Sharnam Solitaire LLP",
    location: "Khokhara, Ahmedabad",
    projectSize: "2,25,000 Sq. ft.",
    projectDes: "4 Floors, 26 Meters",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "Millimeter Designs",
    scope: "RCC Framework, Masonry ,Plaster,Finishing Work.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/5.png",
    title: "SHARNAM SMART SPACE",
    content:
      "A world class business centre designed to harness opportunities with its five Towers comprising of 2B+G+4 measuring upto a total of 4,25,000 sq ft.",
    segment: "Commercial",
    client: "SHARANAM SMART SPACE LLP",
    location: "Amraiwadi, Ahmedabad",
    projectSize: "4,25,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2019",
    architect: "99 studio",
    consultant: "Millimeter designs",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/6.jpg",
    title: "WESTGATE D BLOCK",
    content:
      "Westgate brings all the goodness from the heavenly powers to its occupants, a 20 storey building with 70 mt. height, 8 high speed Mitsubishi lifts and ample car parking.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd.",
    location: "SG Highway, Ahmedabad",
    projectSize: "4,85,000 Sq. ft.",
    projectDes: "23 Floors, 70 Meters",
    projectYear: "2019",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/7.png",
    title: "SHIVALIK SHILP II",
    content:
      "Shivalik Shilp II, a magnificient architecture for the city is a perfect commercial place near Keshavbaug, Ahmedabad having 588 sqft of offices and 2289 sqft of showrooms.",
    segment: "Commercial",
    client: "Shilp Developers",
    location: "Vastrapur, Ahmedabad",
    projectSize: "4,72,000 Sq. ft.",
    projectDes: "13 Floors, 48 Meters",
    projectYear: "2019",
    architect: "INI Design Studio",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/8.png",
    title: "RATNAAKAR NINE SQUARE",
    content:
      "Experience a fully furnished business center enabled with the best of form and function, to deliver everything you need.",
    segment: "Commercial",
    client: "NCLP Infracon LLP",
    location: "Vastrapur, Ahmedabad",
    projectSize: "6,00,000 Sq. ft.",
    projectDes: "13 Floors, 48 Meters",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/9.png",
    title: "WESTGATE BUSINESS BAY",
    content:
      "Spread across two towers, Westgate Business Bay is a sought-after commercial project loaded with all the conveniences.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd.",
    location: "SG Highway, Makarba, Ahmedabad",
    projectSize: "5,36,000 Sq. ft.",
    projectDes: "16 Floors, 54 Meters",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/10.png",
    title: "YASH ARIAN",
    content:
      "Yash Arian comes with a total of 204 luxurious apartments measuring 4,50,000 Sq ft designed by Perkins Eastman, US.",
    segment: "Commercial",
    client: "Yash Arian Infra LLP",
    projectSize: "4,50,000 Sq. ft.",
    projectDes: "14 Floors, 42 Meters",
    projectYear: "2017",
    architect: "Design Studio",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/11.png",
    title: "SUMEL 8",
    content:
      "Well designed by H N Safal, Sumel 8 shelters 11 high rise towers with 1983 units that are highly impressive.",
    segment: "Commercial",
    client: "H N Safal",
    location: "Rakhial, Ahmedabad",
    projectSize: "16,00,000 Sq. ft.",
    projectDes: "5 Floors, 21 Meters",
    projectYear: "2017",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster,Finishing Work.",
  },
  // {
  //   src: "Sources/images/prouctlist/commercial/completed/11.png",
  //   title: "SUMEL Business Park V9",
  //   content:
  //     "Well designed by H N Safal, Sumel 8 shelters 11 high rise towers with 1983 units that are highly impressive.",
  //   segment: "Commercial",
  //   client: "H N Safal",
  //   location: "Asarva, Ahmedabad",
  //   projectSize: "16,00,000 Sqft. 11 Commercial buildings (B+G+5 Floors)",
  //   projectYear: "2014",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster work & Finishing Works of Commercial Building of B+G+4 Storey (9 Blocks).",
  // },
  {
    src: "Sources/images/prouctlist/commercial/completed/12.jpg",
    title: "WESTGATE",
    content:
      "Conceptualized by True Value Nirman, West Gate, Ahmedabad, Gujarat offers a total of 273 fully functional commercial offices with ultra-modern facilities.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd",
    location: "SG Highway, Ahmedabad",
    projectSize: "5,00,000 Sq. ft.",
    projectDes: "23 Floors, 70 Meters",
    projectYear: "2014",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  // {
  //   src: "Sources/images/prouctlist/commercial/completed/12.png",
  //   title: "SUMEL BUSINESS PARK IV 5 ",
  //   content: "...",
  //   segment: "Commercial",
  //   client: "Aadhan Builders Pvt Ltd",
  //   location: "Saraspur, Ahmedabad",
  //   projectSize: "5,00,000 Sqft.",
  //   projectYear: "2014",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster work & Finishing Works of Commercial Building of B+G+4 Storey (5 Blocks).",
  // },

  // {
  //   src: "Sources/images/prouctlist/commercial/completed/12.png",
  //   title: "Mondeal Business Park",
  //   content: "...",
  //   segment: "Commercial",
  //   client: "Aadhan Builders Pvt Ltd",
  //   location: "SG Highway, Ahmedabad",
  //   projectSize: "5,00,000 Sqft.",
  //   projectYear: "2011",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster works of Commercial Building.",
  // },
];

const Commercial = () => {
  const [isOngoing, setIsOngoing] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <img
        src="Sources/images/prouctlist/commercial/commercial.JPG"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />

        <div className="projects-bg">
          <section className="residential py-5">
            <div className="container">
              <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
                Commercial Projects
              </p>
              <div>
                <Row>
                  <Col>
                    <p
                      className="is-size-5 has-text-weight-semibold blue_color mb-2 is-uppercase ongoing-projects"
                      onClick={() => {
                        setIsCompleted(false);
                        setIsOngoing(true);
                      }}
                      style={{
                        borderBottom: isOngoing ? "2px solid #0d2e61" : "none",
                      }}
                    >
                      Ongoing
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="is-size-5 has-text-weight-semibold blue_color mb-2 is-uppercase completed-projects"
                      onClick={() => {
                        setIsOngoing(false);
                        setIsCompleted(true);
                      }}
                      style={{
                        borderBottom: isCompleted
                          ? "2px solid #0d2e61"
                          : "none",
                      }}
                    >
                      Completed
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </div>

        <section className="residential projects-bg pt-0">
          <div className="container">
            <div>
              <Row>
                {isOngoing &&
                  commerciallist.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "650px" }}
                        >
                          <div className="propertylist_image">
                            <Image src={item.src} alt="404 - Not Given" />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                                {item.title}
                              </p>
                            </div>
                            {/* <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div> */}
                            {/* <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Segment:&nbsp;
                            </span>
                            Commercial
                          </p>
                        </div> */}

                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Client:&nbsp;
                                </span>
                                {item.client}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Location:&nbsp;
                                </span>
                                {item.location}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Size:&nbsp;
                                </span>
                                {item.projectSize}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Description:&nbsp;
                                </span>
                                {item.projectDes}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Year:&nbsp;
                                </span>
                                {item.projectYear}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Architect:&nbsp;
                                </span>
                                {item.architect}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Str. Consultant:&nbsp;
                                </span>
                                {item.consultant}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Scope:&nbsp;
                                </span>
                                {item.scope}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
            <div>
              <Row>
                {isCompleted &&
                  commercialcompleted.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "650px" }}
                        >
                          <div className="propertylist_image">
                            <Image src={item.src} alt="404 - Not Given" />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                                {item.title}
                              </p>
                            </div>
                            {/* <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div> */}
                            {/* <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Segment:&nbsp;
                            </span>
                            {item.segment}
                          </p>
                        </div> */}
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Client:&nbsp;
                                </span>
                                {item.client}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Location:&nbsp;
                                </span>
                                {item.location}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Size:&nbsp;
                                </span>
                                {item.projectSize}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Description:&nbsp;
                                </span>
                                {item.projectDes}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Year:&nbsp;
                                </span>
                                {item.projectYear}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Architect:&nbsp;
                                </span>
                                {item.architect}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Str. Consultant:&nbsp;
                                </span>
                                {item.consultant}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Scope:&nbsp;
                                </span>
                                {item.scope}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Commercial;

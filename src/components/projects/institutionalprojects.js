import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import Header from "../header/header";

const institutionalprojectslist = [
  {
    src: "",
    title: "Anubhav School",
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Pilak Shah",
    location: "Sanand, Ahmedabad",
    projectSize: "75,704 Sq. ft.",
    projectDes: "8 Floors, 43 Meters",
    projectYear: "2024 - Current",
    architect: "Kakani Associates",
    consultant: "Japan Shah Consulting Engineers",
    scope:
      "Civil Works Excavation, Backfiling, pile Foundation work, masonary, plaster, flooring, painting for School Building",
  },
  
];
const institutionalprojectscompleted = [
  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/1-1.jpg",
    title: "ANAND NIKETAN SCHOOL",
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Utthan Sewa Trust",
    location: "Sanand, Ahmedabad",
    projectSize: "349,062 Sq. ft.",
    projectDes: "8 Floors, 43 Meters",
    projectYear: "2022 - Current",
    architect: "Kakani Associates",
    consultant: "DELF Consulting Engineers (India) Private Limited",
    scope:
      "Civil works, Masonry & Plaster, Painting, Flooring, and Waterproofing.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/2.png",
    title: "MUSEUM KOBA",
    content:
      "The Museum- Samrat Samprati Sangrahalaya of Shri Mahavir Jain Aradhana Kendra,Koba preserves and nourishes the rare heritage of Jain Art and architecture",
    segment: "Corporate",
    client: "Shri Mahavir Jain Aradhana Kendra, Koba (SMJAK Trust)",
    location: "Koba, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "16 Meters",
    projectYear: "2022",
    architect: "SJK Architects",
    consultant: "Global Engineering Services",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },

  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/1.png",
    title: "JITO HOSTEL",
    content:
      "Hostel building work for Jain International Trade organisation-An Educational Trust",
    segment: "Residential",
    client: "JITO Ahmedabad Educational Trust",
    location: "CG Road, Ahmedabad",
    projectSize: "37,200 Sq. ft.",
    projectDes: "5 Floors, 24 Meters",
    projectYear: "2022",
    architect: "PVDRS, Ahmedabad",
    consultant: "P-CUBE Consultant",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/lubi corporate.jpg",
    title: "LUBI CORPORATE",
    content: "Corporate office at Tragad, Ahmedabad",
    segment: "Corporate",
    client: "Lubi Industries LLP",
    location: "Tragad, Ahmedabad",
    projectSize: "1,68,400 Sq. ft.",
    projectDes: "7 Floors, 36 Meters",
    projectYear: "2022",
    architect: "DSP Design Associates",
    consultant: "KMH Engineering",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/2.png",
    title: "ANAND NIKETAN SCHOOL",
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Anand Niketan",
    location: "Sindhu Bhavan road, Ahmedabad",
    projectSize: "50,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2015",
    architect: "Kakani Associates",
    consultant: "Himanshu Parikh Consulting Engineers",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/3.png",
    title: "NARAYANA HRUDALAYA HOSPITAL",
    content: "NARAYANA HRUDALAYA HOSPITAL",
    segment: "Healthcare",
    client: "Narayana Hrudalaya Hospital",
    location: "Rakhial, Ahmedabad",
    projectSize: "2,00,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2011",
    architect: "Shapoorji Pallonji & Co. Ltd, Umesh & Co.",
    consultant: "Umesh & Co",
    scope: "Earthwork,RCC Framework,Masonry, Plaster.",
  },
];

const Institutionalprojects = () => {
  const [isOngoing, setIsOngoing] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <img
        src="Sources/images/prouctlist/Institutional_projects/instititional.JPG"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />
        <section className="residential py-5">
          <div className="container">
            <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
              Institutional And Corporate Projects
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
                      borderBottom: isCompleted ? "2px solid #0d2e61" : "none",
                    }}
                  >
                    Completed
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className="residential pt-0">
          <div className="container">
            {/* <div>
            <Row>
              {isOngoing && institutionalprojectslist.map((item, key) => {
                return (
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    <div className="property_list">
                      <div className="propertylist_image">
                        <Image src={item.src} alt="404 - Not Given" />
                      </div>

                      <div className="propertylist_content p-4">
                        <div className="pt-2">
                          <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                            {item.title}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Segment:&nbsp;
                            </span>
                            {item.segment}
                          </p>
                        </div>
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
                              Project Size:&nbsp;
                            </span>
                            {item.projectSize}
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
          </div> */}

            <div>
              <Row>
                {isOngoing &&
                  institutionalprojectslist.map((item, key) => {
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
                          </div>
                          <div className="pt-3">
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

              <Row>
                {isCompleted &&
                  institutionalprojectscompleted.map((item, key) => {
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
                          </div>
                          <div className="pt-3">
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

export default Institutionalprojects;

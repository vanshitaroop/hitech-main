import React, { useEffect, useState } from "react";
import { BackTop, Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { url } from "../../constants/navhome";
import Modal from "react-modal";
import { IoMdContact } from "react-icons/io";
import TextArea from "antd/lib/input/TextArea";
import Clients from "../clients/clients";
import img1 from "./hitech_logo.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    zIndex: "1000",
    border: "1px solid #0d2e61",
  },
};
const mobilecustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    zIndex: "1000",
  },
};
const headeritemone = [
  {
    headname: "Who We Are",
    headlink: url.whoweare,
  },
  {
    headname: "Our Management",
    headlink: url.management,
  },

  {
    headname: "Our Standards",
    headlink: url.standards,
  },
  {
    headname: "Awards & Certifications",
    headlink: url.award,
  },
  {
    headname: "CSR",
    headlink: url.csr,
  },
  {
    headname: "Careers",
    headlink: url.careers,
  },
];

const headeritemtwo = [
  {
    headname: "Residential",
    headlink: url.residential,
  },
  {
    headname: "Commercial",
    headlink: url.commercial,
  },
  {
    headname: "Industrial",
    headlink: url.industrial,
  },
  {
    headname: "Institutional And Corporate",
    headlink: url.institutionalprojects,
  },
];
const headeritemthree = [
  {
    headname: "Plant And Machinery",
    headlink: url.machinery,
  },
  {
    headname: "Form work",
    headlink: url.formwork,
  },
  {
    headname: "Technology",
    headlink: url.technology,
  },
];
const headeritemfour = [
  {
    headname: "Our Clients",
    headlink: url.ourclients,
  },
  {
    headname: "Architect And Consultants",
    headlink: url.architech,
  },
];

const Header = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [isDropDown, setisDropDown] = useState(true);

  const onProjectChange = (value) => {
    if (value === true) {
      setIsAboutOpen(false);
      setIsExpertiseOpen(false);
      setIsClientOpen(false);
    }
    setIsProjectOpen(value);
  };

  const onAboutChange = (value) => {
    if (value === true) {
      setIsProjectOpen(false);
      setIsExpertiseOpen(false);
      setIsClientOpen(false);
    }
    setIsAboutOpen(value);
  };
  const onExpertiseChange = (value) => {
    if (value === true) {
      setIsClientOpen(false);
      setIsAboutOpen(false);
      setIsClientOpen(false);
    }
    setIsExpertiseOpen(value);
  };
  const onClientChange = (value) => {
    if (value === true) {
      setIsExpertiseOpen(false);
      setIsAboutOpen(false);
      setIsClientOpen(false);
    }
    setIsClientOpen(value);
  };

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".navbarshadow");
    const scrollTop = window.scrollY;
    if (scrollTop >= 150) header.classList.add("fixed-nav");
    else header.classList.remove("fixed-nav");
  };
  /* end*/
  const [isActive, setIsActive] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const small = width < 1023;

  useEffect(() => {
    const widthEvent = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  const onFinish = (formData) => {};

  const [isActives, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActives);
  };

  // model start

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <BackTop />
      <div>
        <button onClick={openModal} className="model_button">
          <IoMdContact className="is-size-3" />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={window.innerWidth >= 992 ? customStyles : mobilecustomStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button> */}
          <button onClick={closeModal} className="close">
            X
          </button>
          <div>
            <div className="head_wrapper">
              <p className="is-size-3 has-text-weight-semibold blue_color has-text-centered">
                Contact Us
              </p>
            </div>
            <p className="is-size-5 has-text-centered">
              Questions, comments or special requests?
            </p>
            <p className="is-size-6 has-text-centered mb-4 has-text-grey-dark">
              Get in touch today, we're happy to help.
            </p>
          </div>
          <Form onFinish={onFinish}>
            <Form.Item
              className="form_hover"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please Enter valid name",
                  pattern: /^[A-Za-z\s\b]+$/,
                },
              ]}
            >
              <Input placeholder="Full Name" onc className="form_item" />
            </Form.Item>
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please Enter valid Mobile",
                  pattern: /^[0-9]{10}$/,
                },
              ]}
            >
              <Input placeholder="Mobile" className="form_item" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter valid email",
                  pattern: /^[A-Za-z0-9._-]+@[A-Za-z]+.[A-Za-z]+$/,
                },
              ]}
            >
              <Input placeholder="Email" className="form_item" />
            </Form.Item>
            <Form.Item>
              <TextArea rows={1} placeholder="Message..." />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="btn btn-color submit_button"
                size="large"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      {/* <div className="whats-float">
        <Space>
          <BsWhatsapp />
          <div className="callus">
            Contact Us
            <br />
            <p>+91-942-970-9662</p>
          </div>
        </Space>
      </div> */}
      {/* <div className="sidebar-contact">
        <div className="toggle" onClick={ToggleClass}></div>
        <h2>Contact Us</h2>
        <div className="scroll">
          <Form onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please Enter valid name",
                  pattern: /^[A-Za-z\s\b]+$/,
                },
              ]}
            >
              <Input placeholder="Your Name" className="p-2" onc />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter valid email",
                  pattern: /^[A-Za-z0-9._-]+@[A-Za-z]+.[A-Za-z]+$/,
                },
              ]}
            >
              <Input placeholder="Your Email" className="p-2" />
            </Form.Item>
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please Enter valid Mobile",
                  pattern: /^[0-9]{10}$/,
                },
              ]}
            >
              <Input placeholder="Your Mobile" className="p-2" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please Enter valid Message",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Your Message"
                rows={5}
                style={{
                  resize: "none",
                }}
                className="p-2"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                className="btn btn-color"
                block
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div> */}
      <strong className="site-back-top-basic"></strong>
      <nav
        className="navbar navbarshadow"
        role="navigation"
        aria-label="main navigation"
        style={{
          width: width < 1024 ? (width < 768 ? "100%" : "70%") : "50%",
          marginLeft: width < 1024 ? (width < 768 ? "0%" : "15%") : "25%",
          borderRadius: "10px",
          boxShadow: "0 0 2px 2px #6d6c6c71",
          marginTop: "20px",
        }}
      >
        <div className="container navigation">
          {/* <div className="navbar-brand"> */}
          {/* <a className="navbar-item logo" href="\">
              <img src="Sources/images/hitech_logo.png" alt="logo" />
            </a> */}

          {/* <a
              href="#"
              role="button"
              className={`my-auto navbar-burger ${isActive ? "is-active" : ""}`}
              onClick={() => {
                setIsActive(!isActive);
                ToggleClass();
              }}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
          {/* </div> */}

          {/* <div className="navbar-start"> */}
          {/* <div
              className="navbar-end navbar_line my-auto"
              style={{
                width: width >= 1024 && "100%",
                display: width >= 1024 && "flex",
                justifyContent: width >= 1024 && "center",
              }}
            ></div> */}
          {/* </div> */}
          <div
            id="navbarBasicExample"
            // className={`borderXwidth navbar-menu ${
            //   isActive ? "is-active" : ""
            // }`}
            style={{
              width: width < 1024 ? (width < 525 ? "98%" : "95%") : "65%",
              // borderRadius: width < 1024 && "10px",
              // boxShadow: width < 1024 && "0 0 5px 2px #6d6c6c71",
              maxWidth: width < 1024 ? (width < 525 ? "98%" : "95%") : "65%",
            }}
          >
            <div
              className="my-auto"
              style={{
                width: width >= 1024 ? "50%" : "90%",
                display: "flex",
                justifyContent: "center",
                fontSize: width < 525 && "12px",
                marginLeft: width > 1024 ? "50%" : "6%",
              }}
            >
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  onClick={() => {
                    onProjectChange(!isProjectOpen);
                  }}
                  className="navbar-link header_item"
                  style={{
                    display: small && "inline-block",
                  }}
                >
                  Projects
                </Link>
                <div
                  className="navbar-dropdown"
                  style={{
                    display: small
                      ? isProjectOpen
                        ? "table-caption"
                        : "none"
                      : undefined,
                    maxWidth: small && isProjectOpen && "108px",
                    boxSizing: small && isProjectOpen && "border-box",
                    overflow: small ? "hidden" : undefined,
                  }}
                >
                  {isDropDown &&
                    headeritemtwo.map((item, key) => {
                      return (
                        <Link
                          className="navbar-item"
                          to={item.headlink}
                          key={key}
                          onClick={() => {
                            setIsActive(!isActive);
                            setisDropDown(false);
                            setTimeout(() => {
                              setisDropDown(true);
                            }, 100);
                          }}
                        >
                          {item.headname}
                        </Link>
                      );
                    })}
                </div>
              </div>
              {/* <div className="header_wrapper">
                <Link
                  className="navbar-item header_item hoverheader_item"
                  to={url.services}
                  onClick={() => setIsActive(false)}
                >
                  Expertise
                </Link>
              </div> */}
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  onClick={() => {
                    onExpertiseChange(!isExpertiseOpen);
                  }}
                  className="navbar-link header_item"
                  style={{
                    display: small && "inline-block",
                  }}
                >
                  Expertise
                </Link>
                <div
                  className="navbar-dropdown"
                  style={{
                    display: small
                      ? isExpertiseOpen
                        ? "table-caption"
                        : "none"
                      : undefined,
                    maxWidth: small && isProjectOpen && "108px",
                    boxSizing: small && isProjectOpen && "border-box",
                    overflow: small ? "hidden" : undefined,
                  }}
                >
                  {isDropDown &&
                    headeritemthree.map((item, key) => {
                      return (
                        <Link
                          className="navbar-item"
                          to={item.headlink}
                          key={key}
                          onClick={() => {
                            setIsActive(!isActive);
                            setisDropDown(false);
                            setTimeout(() => {
                              setisDropDown(true);
                            }, 100);
                          }}
                        >
                          {item.headname}
                        </Link>
                      );
                    })}
                </div>
              </div>
              {/* <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/">
                  <img src={img1} alt="" />
                </Link>
              </div> */}
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  onClick={() => {
                    onAboutChange(!isAboutOpen);
                  }}
                  className="navbar-link header_item"
                  style={{
                    display: small && "inline-block",
                  }}
                >
                  About Us
                </Link>
                <div
                  className="navbar-dropdown"
                  style={{
                    display: small
                      ? isAboutOpen
                        ? "table-caption"
                        : "none"
                      : undefined,
                    maxWidth: small && isAboutOpen && "115px",
                    boxSizing: small && isAboutOpen && "border-box",
                    overflow: small ? "hidden" : undefined,
                  }}
                >
                  {isDropDown &&
                    headeritemone.map((item, key) => {
                      return (
                        <Link
                          className="navbar-item"
                          to={item.headlink}
                          key={key}
                          onClick={() => {
                            setIsActive(!isActive);
                            setisDropDown(false);
                            setTimeout(() => {
                              setisDropDown(true);
                            }, 100);
                          }}
                        >
                          {item.headname}
                        </Link>
                      );
                    })}
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  onClick={() => {
                    onClientChange(!isClientOpen);
                  }}
                  className="navbar-link header_item"
                  style={{
                    display: small && "inline-block",
                  }}
                >
                  Clients
                </Link>
                <div
                  className="navbar-dropdown"
                  style={{
                    display: small
                      ? isClientOpen
                        ? "table-caption"
                        : "none"
                      : undefined,
                    maxWidth: small && isProjectOpen && "108px",
                    boxSizing: small && isProjectOpen && "border-box",
                    overflow: small ? "hidden" : undefined,
                  }}
                >
                  {isDropDown &&
                    headeritemfour.map((item, key) => {
                      return (
                        <Link
                          className="navbar-item"
                          to={item.headlink}
                          key={key}
                          onClick={() => {
                            setIsActive(!isActive);
                            setisDropDown(false);
                            setTimeout(() => {
                              setisDropDown(true);
                            }, 100);
                          }}
                        >
                          {item.headname}
                        </Link>
                      );
                    })}
                </div>
              </div>
              {/* <div className="header_wrapper">
                <Link
                  className="navbar-item header_item hoverheader_item"
                  to={url.gallery}
                >
                  Gallery
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

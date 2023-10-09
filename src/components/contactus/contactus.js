import React from "react";
import { Button, Col, Form, Input, Row, Space } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import TextArea from "antd/lib/input/TextArea";

const Contact = () => {
  const onFinish = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <section className="contact_box mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <Row
            style={{
              boxShadow: "0 0 10px 0 rgb(43 52 59 / 32%)",
              // background: "#f4f4f4",
            }}
          >
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ background: "#0d2e61" }}
            >
              <div className="loca_wrapper">
                <div className="section_heading">
                  <p className="is-size-4 has-text-centered has-text-white has-text-weight-semibold">
                    CONTACT US
                  </p>
                </div>
                <div
                  className="pt-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Row>
                    <Col xxl={24} md={24} lg={24} sm={24} xs={24}>
                      <div className="py-5" style={{ display: "flex" }}>
                        <Space direction="horizontal" size="small"></Space>
                        <Row>
                          <Col xxl={2} lg={2} md={2} sm={2} xs={3}>
                            <ImLocation className="arrow_icon has-text-white contact_icon" />
                          </Col>
                          <Col
                            xxl={22}
                            lg={22}
                            md={22}
                            sm={22}
                            xs={21}
                            className="pl-3"
                          >
                            <a
                              href="https://www.google.com/maps/place/Hitech+Projects+Private+Limited/@22.9975806,72.4969546,17z/data=!3m1!4b1!4m5!3m4!1s0x395e9b475ef7e48d:0x922a96c8de37de3a!8m2!3d22.9975739!4d72.4991428"
                              target="_blank"
                              className="has-text-white contact_content"
                            >
                              <p className="my-auto">
                                Hitech Projects Pvt. Ltd.
                              </p>
                              <p>A-1401, Block-A, </p>
                              <p>West Gate Business Bay,</p>
                              <p>Besides Signature - 1, S.G. Highway,</p>
                              <p> Makarba, Ahmedabad - 380051. </p>
                              <p>Gujarat, India</p>
                            </a>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col xxl={24} md={24} lg={24} sm={24} xs={24}>
                      <div className="py-5" style={{ display: "flex" }}>
                        <Space
                          direction="horizontal"
                          size="small"
                          style={{ display: "flex" }}
                        >
                          <BiPhoneCall className="arrow_icon has-text-white contact_icon" />
                          <div>
                            <a
                              href="tel:+91 9904592200"
                              className="has-text-white contact_content"
                            >
                              <span className="pl-2">+91 990 4592 200</span> /
                              <br />
                            </a>

                            <a
                              href="tel:+91 990 4288 900"
                              className="has-text-white contact_content"
                            >
                              <span className="pl-2">+91 990 4288 900</span>
                              <br />
                            </a>
                          </div>
                        </Space>
                      </div>
                    </Col>
                    <Col xxl={24} md={24} lg={24} sm={24} xs={24}>
                      <div className="py-5" style={{ display: "flex" }}>
                        <Space
                          direction="horizontal"
                          size="small"
                          style={{ display: "flex" }}
                        >
                          <AiOutlineMail className="arrow_icon has-text-white contact_icon" />
                          <a
                            href="mailto:info@hitechprojects.co.in"
                            className="has-text-white contact_content"
                          >
                            <span className="pl-2">
                              info@hitechprojects.co.in
                            </span>
                          </a>
                        </Space>
                      </div>
                    </Col>
                    {/* <Col xxl={24} md={24} lg={24} sm={24} xs={24}>
                      <div className="py-4" style={{ display: "flex" }}>
                        <Space
                          direction="horizontal"
                          size="small"
                          style={{ display: "flex" }}
                        >
                          <ImLocation className="arrow_icon has-text-white contact_icon" />

                          <a
                            href="tel:+91 9824256996"
                            className="has-text-white contact_content"
                          >
                            <span className="pl-2">+91 9824256996</span>
                            <br />
                          </a>
                        </Space>
                      </div>
                    </Col> */}
                  </Row>
                </div>
              </div>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="my-auto form_col"
              style={{
                background: "#f4f4f4",
              }}
            >
              <div
                className="form_wrapper"
                style={{
                  margin: "1rem",
                }}
              >
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
                    <Input placeholder="Your Name" onc className="form_item" />
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
                    <Input placeholder="Your Mobile" className="form_item" />
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
                    <Input placeholder="Your Email" className="form_item" />
                  </Form.Item>
                  <Form.Item>
                    <TextArea rows={1} placeholder="TextArea" />
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
              </div>
            </Col>
          </Row>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Contact;

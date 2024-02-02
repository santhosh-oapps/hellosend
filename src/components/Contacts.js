import React from "react";
import { Typography, Row, Col, Card, Avatar } from "antd";
import { Helmet } from 'react-helmet';
import "../assets/About.css";
import MyForm from "../components/MyForm.js";

const { Meta } = Card;
const { Title, Text } = Typography;

const Contacts = () => {
  return (
    <div className="" style={{ backgroundColor: "white" }}>
    <Helmet>
      <title>Ready to Transform Your Customer Engagement? Contact HelloSend Today</title>
      <meta name="description" content="Connect with Hellosend to learn how SMS marketing can help your business grow." />
    </Helmet>
      <Row>
        <div className="contact-sec" style={{ backgroundColor: "#060B27" }}>
            <aside className="main-img"></aside>
            <div className="contact-container">
            <Title level={1} style={{ marginBottom: "30px", color: "#fff", textAlign: "center"}}>
              Get in Touch: Reach Out to Our Team for Support and Inquiries
            </Title>
            <Row
              style={{ padding: "2%", paddingBottom: "0px", textAlign: "left" }}
            >
              <Col xs={24}>
                <section className="contact-form">
                    <MyForm />
                </section>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Contacts;
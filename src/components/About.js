import React from "react";
import { Typography, Row, Col, Card, Avatar } from "antd";
import { Helmet } from 'react-helmet';
import "../assets/About.css";
import ourTeamOne from "../img/Team/ourTeam2.jpg";
import ourVision from "../img/vision-img.png";
import ourValues from "../img/our-value.png";

const { Meta } = Card;
const { Title, Text } = Typography;

const About = () => {
  return (
    <div className="" style={{ backgroundColor: "white" }}>
    <Helmet>
      <title>Transforming Customer Engagement | HelloSend</title>
      <meta name="description" content="Connect with customers instantly with automated text messages. Learn about our story, vision, and values." />
    </Helmet>
      <Row>
        <aside className="banner">
          <h1>About</h1>
        </aside>
        <div className="our-stroy" align="center">
         <Title level={1} style={{ marginBottom: "30px" }}>
           Our Journey of Simplifying Customer Interactions Through SMS
          </Title>
          <Title level={2} style={{ marginBottom: "50px" }}>
            Our Story
          </Title>
          <div className="oappsPagePara">
            For more than a decade, our Founder Kavitha, worked in Zoho to later
            join a startup called Zarget. While the startup was later acquired
            by Freshworks, Kavitha made a bold decision to take a hiatus from
            her professional life, dedicating her time to raising her second
            child.
            <br />
            HelloSend was started by Kavitha when she made a comeback in the
            industry, to start something on her own. Kavitha recognized the need
            for a more sustainable and scalable solution when Zoho gave her the
            opportunity to build apps that the customers wanted. This
            realization led her to co-found HelloSend, a software product app
            designed to address the evolving needs of eCommerce and customers.
            <br />
            She collaborated on this venture with her brother, Dineshkumar, to
            bring HelloSend to life.Today, HelloSend continues to grow
            significantly, with a dedicated team of around 15 employees and
            providing valuable SMS business solutions to over 300 paying
            customers.
          </div>
        </div>
        <div className="our-vision" style={{ backgroundColor: "#060B27" }}>
          <div className="container">
            <Row
              style={{ padding: "2%", paddingBottom: "0px", textAlign: "left", alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center", }}
            >
              <Col xl={8} md={8} xs={24} style={{ textAlign: "center" }}>
                <img
                  style={{ width: "auto", height: "auto" }}
                  className="img-fluid"
                  src={ourVision}
                  alt=""
                />
              </Col>
              <Col xl={16} md={16} xs={24}>
                <Title level={2}>Our Vision</Title>
                <p>
                  HelloSend strives to create solutions that provide seamless
                  CRM text messaging capabilities. We are passionate about
                  aiding our top CRM and eCommerce providers, and believe that
                  SMS integration is a powerful tool to avoid switching between
                  different tools.
                  <br />
                  We love how helping our customers brings them new customers.
                  It's a win-win!
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="our-values">
          <div className="container">
            <Row
              style={{ padding: "2%", paddingBottom: "0px", textAlign: "left"
             }} className="our-values-in"
            >
              <Col xl={16} md={16} xs={24}>
                <Title level={2}>Our Values</Title>
                <p>We believe that simplifying customer interactions makes us stronger. Building a more streamlined, integrated, and efficient experience is good for our teams, our customers, and our community. We empower our customers to seamlessly connect with us through their preferred channels, and we continually seek new ways to do so.
                </p>
              </Col>
              <Col xl={8} md={8} xs={24} style={{ textAlign: "center" }}>
                <img
                  style={{ width: "auto", height: "auto" }}
                  className="image"
                  src={ourValues}
                  alt=""
                />
                </Col>
            </Row>
          </div>
        </div>
        <Col span={24} align="center" className="ourTeam">
          <div className="container">
          <Row align="middle" justify="center" className="team">
            <img className="image"
              src={ourTeamOne}
              alt="Image1"
            />
            <Title level={2} className="overlay-text overlay-textMedia">
              {" "}
              Meet Our Dynamic Team of Innovators, Collaborators, and
              Problem-Solvers, Dedicated to Turning Your Visions into Reality.
            </Title>
          </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;

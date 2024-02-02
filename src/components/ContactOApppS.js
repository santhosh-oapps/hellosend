import React from 'react';
import { Typography } from 'antd';
import '../App.css';
import { Col, Row } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';


const { Title } = Typography;

function ContactOApps () {
  return ( 
    <>
    <section id="contact" className="wow fadeInUp backColorContact contactSectionTobAndBottomPadding">
    <div className="container">
      <header className="section-headerBelowSpace">
        <Row align="center"><Col>
      <Title style={{color:"#1D1D1D"}} level={2} className='section-headerTestimonials'>Contact Us</Title>
      </Col></Row>
      </header>
      <Row align="center" >
      <Col xl={8} md={12} xs={24}>
        <Row align="center" className='footerUsefulLinksListIcons'>
      <EnvironmentOutlined  />
      </Row>
      <Row className='ColorForContact' align="center">
        <h2>Address</h2>
      </Row>
      <Row className='ColorForContact' align="center">
        <h4>TamilNadu, India</h4>
        </Row>
      </Col>
      <Col xl={8} md={12} xs={24}><Row align="center" className='footerUsefulLinksListIcons'>
      <PhoneOutlined  />
      </Row>
      <Row className='ColorForContact' align="center">
        <h2>Phone Number</h2>
      </Row>
      <Row className='ColorForContact' align="center">
        <h4>+1 (351) 213-6493</h4>
        </Row></Col>
      <Col xl={8} md={12} xs={24}><Row align="center" className='footerUsefulLinksListIcons'>
      <MailOutlined  />
      </Row>
      <Row className='ColorForContact' align="center">
        <h2>Email</h2>
      </Row>
      <Row className='ColorForContact' align="center">
        <h4>help@oapps.xyz</h4>
        </Row></Col>
    </Row>
    </div>
  </section>
  
  </>
  );
}
export default ContactOApps;

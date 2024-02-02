import React from 'react';
import { Row, Col, Typography } from 'antd';
import "../assets/OAppSPageContent/oappsPageContent.css"

const { Title } = Typography;

const OAppSPageContent = () => {
  return (
    <Row className='oappsPageHeightInMobileView' style={{background:"white", color:"black"}}>
      <Col xs={24} sm={24} md={24} lg={24}>
      
      <div ></div>
      <div className="content">
          <Title className='oappsPageTitle' level={1} style={{ color: "#1D1D1D", fontSize:"30px" }}>
            How HelloSend transform communication?
          </Title>
          <div className='oappsPagePara'>
             HelloSend transforms communication by providing an in-app solution that fits right inside your CRM/eCommerce software. Our solution enables, efficient engagement, automate messages, personalized interactions, and timely support. Whether it's sending SMS, Chat, or WhatsApp messages, or delivering crucial updates, HelloSend empowers businesses to effectively connect with customers, revolutionizing the way they engage and interact. 
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default OAppSPageContent;

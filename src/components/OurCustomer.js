import React from 'react';
import { Row, Col, Typography, Carousel } from 'antd';
import OurCustomerLogos from '../img/ourCustomerLogos.png'; 
import "../assets/OAppSPageContent/oappsPageContent.css"

const { Title } = Typography;

const OurCustomer = () => {

  return (
    <Row className='ourCustomverHeightInMobileView' style={{background:"white", color:"black"}}>
      <Col xs={24} sm={24} md={24} lg={24}>
      <div className="content">
          <Title className='oappsPageTitle' level={1} style={{ color: "#1D1D1D", fontSize:"30px" }}>
            Customers
          </Title>
          <div className='oappsPagePara ourCustomerLogos'>
          <img src={OurCustomerLogos} alt="Logo 1" style={{ background: "repeat-x"}}></img>
          </div>
        </div>
      </Col>
    </Row>
  );
};  

export default OurCustomer;

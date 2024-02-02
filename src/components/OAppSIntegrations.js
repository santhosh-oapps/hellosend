import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Card, Button, Input, Badge, Drawer, List } from "antd";
import "../assets/OAppSPageContent/oappsPageContent.css";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Typography } from "antd";

const { Title } = Typography;

const OAppSIntegrations = () => {
    const seeMorePortfolio = () => {
        // Your click event handling logic goes here
        window.open('our-integrations', '_blank');
        console.log('Button clicked!');
      };
    
  return (
    <div>      
    <Row className='oappsPageHeightInMobileView' style={{background:"white", color:"black"}}>
      <Col xs={24} sm={24} md={24} lg={24}>
      <div className="content">
          <Title className='oappsPageTitle' level={1} style={{ color: "#1D1D1D", fontSize:"30px" }}>
          Our Integrations
          </Title>
          <div className='oappsPagePara'>
            HelloSend integrates seamlessly with top CRM providers like Salesforce, Zoho CRM, Pipedrive, Hubspot. You can send 1-1 sms, bulk sms and automated SMS notifications to your contacts / leads / accounts. No need to switch between different tools to send SMS to your contact and improves engagement rate. HelloSend sits right inside your CRM and works closely with any workflow that you create. 
          </div>
          <Row style={{justifyContent:"center"}}> <Button  style={{marginRight:"2%", borderRadius:"15px", backgroundColor:"#151934", color:"white"}} onClick={seeMorePortfolio}>View More<ArrowRightOutlined /></Button></Row>
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default OAppSIntegrations;

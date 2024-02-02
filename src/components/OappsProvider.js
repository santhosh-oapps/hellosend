import React from 'react';
import { Row, Col, Typography } from 'antd';
import providerLogs from '../img/ProviderLogos.png'
import providerLogsMobileView from '../img/ProviderLogosMobileView.png'
import "../assets/OAppSPageContent/oappsPageContent.css"

const { Title } = Typography;

const OAppSProvider = () => {
   
  return (
    <Row className='ProviderBackground'>
      <Col xs={24} sm={24} md={24} lg={24}>
        <div className="content">
          <Title className='ProviderTitle' level={1} style={{ color: "#1D1D1D", fontSize:"30px", marginBottom:'32px' }}>
              Bring Your Own Provider
          </Title>
          <div className='oappsPagePara'>
             Empower your CRM with your preferred messaging provider (Twilio, Vonage, RingCentral, ClickSend). Easily send messages via the messaging cloud using your API credentials for seamless credit and phone number management. 
          </div>
          <div align='center' style={{marginTop:'5px', marginBottom:'100px'}}>
            <img className='ProviderLogosNormalView' src={providerLogs} style={{width:'60%'}}></img>
            <img className='ProviderLogosMobileView'src={providerLogsMobileView} style={{width:'60%'}}></img>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default OAppSProvider;

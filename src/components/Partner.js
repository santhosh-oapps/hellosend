import React from 'react';
import { Row, Col } from 'antd';
import '../assets/PartnerCSS/partner.css';
import partnerLogos from '../img/Partner/PartnerLogos.png'
import partnerLogsForMobileView from '../img/Partner/PartnerLogoForMobile.png'
import OurPartner from '../img/Partner/ourPartnerTitle.png'

const OappsParter = () => {
  return (
    <>
    <div className='partnerSection' style={{backgroundColor:'white'}}>
    
      <Row align='center'>
      <Col style={{fontSize:'30px', color:'#b5b6be', fontWeight:"500", marginTop:'20px'}}>Partners</Col>
      </Row>
      </div>
      <div align='center' style={{backgroundColor:'white'}}>
        <img className='partnerLogosNormalView' src={partnerLogos} style={{width:'85%', marginTop:'-115px', position: 'center bottom'}}></img>
        <img className='partnerLogosMobileView' src={partnerLogsForMobileView} style={{marginTop:'-115px', height:'250px'}}></img>
      </div>
      </>
  )
  };

  export default OappsParter;
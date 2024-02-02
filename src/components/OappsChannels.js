import React, { useState, useEffect } from 'react';
import {Typography, Row, Col, Card, Button } from 'antd';
import channelLogoNormalView from "../img/OappsChannel.png"
import channelLogoMobileView from '../img/OappsChannelMobileView.png'
const { Title } = Typography;

const OappsChannels = () => {
  
  return ( 
    <>
    <section className="wow fadeInUp oappsChannelBackground" style={{backgroundColor:"#060B27", paddingBottom:'50px'}}>
    <div className="container" >
      <header>
        <Row align='center'>
        <Col className='channelWeSupport' style={{fontSize:'30px', color:'#b5b6be', fontWeight:"500", marginTop:'50px', marginBottom:'20px' }}>Channels we support</Col>
        </Row>
        <Row align="center" className='oappsChannelTitle' >
          <img className='channelLogoNormalView' src={channelLogoNormalView} style={{width:'40%'}}>
            
          </img>
          <img className='channelLogoMobileView' src={channelLogoMobileView} style={{width:'40%'}}>
            
          </img>
        </Row>
        <Row>
          
        </Row>
      </header>
      
    </div>
  </section>
  
  </>
  );
}
export default OappsChannels;

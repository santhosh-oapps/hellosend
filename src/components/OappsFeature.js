import React, { useState, useEffect } from 'react';
import {Typography, Row, Col, Card, Button } from 'antd';
import '../App.css';
import RightArrow from "../img/RightArrow.png"
import featureCommunicationIcon from '../img/Communication.png'
import featureCamapignIcon from '../img/Camapign.png'
import featureAutomatedIcon from '../img/AutomatedSMS.png'
const { Title } = Typography;


const Carddata = [
  
  {   
      featureHead: '1-on-1 Messaging',
      featureBody: 'Experience the Magic of one-on-one Messaging: Connect personally with customers and access full conversation history for personalized interactions.',
      featureBlock: 'https://oapps.medium.com/1-on-1-messaging-elevate-crm-engagement-7280732fccdf',
      featureCommunicationIcon : featureCommunicationIcon,
      marginTop:"oappsFeatureLearnMore"
  },
  
  {
      featureHead: 'Target SMS Camapign',
      featureBody: 'Personalize your SMS marketing with targeted campaigns and contextual templates. Improves customer engagement like never before, delivering relevant messages tailored to their interests.',
      featureBlock: 'https://oapps.medium.com/target-sms-campaign-with-personalised-messaging-41b501764340',
      featureCommunicationIcon : featureCamapignIcon
  },
  {
    featureHead: 'Automated SMS',
    featureBody: 'Automated SMS enhances short message service delivery efficiency, offering businesses time and resource savings. It enables personalized messages and SMS automation based on workflow rules.',
    featureBlock: 'https://oapps.medium.com/convert-leads-and-skyrocket-customer-engagement-with-automated-sms-workflows-c509de53e8b2',
    featureCommunicationIcon : featureAutomatedIcon
    
}
  
]

const OappsFeature = () => {
 
  return ( 
    <>
    <section className="wow fadeInUp topPad oappsFeatureBackgruound">
      <div className="container">
        <div>
        <header className="section-headerBelowSpace">
          <Row align="center">
            <Col>
              <Title level={2} className='section-headerTestimonials' style={{marginBottom:'32px'}}>Power of SMS Channel</Title>
            </Col>
          </Row>
        </header>

              <Row className='mobileViewOappsFeatureCardSize' style={{paddingLeft:"15%", paddingRight:"15%"}}>
              {Carddata.map((value, index) => (
                  <Col key={index} xs={24} sm={24} md={8} align="center" >
                    <Card className='mobileViewOappsFeatureCard' style={{ width: "90%", height: "385px", borderRadius: "8px", marginTop:"20px", marginBottom:"15px", backgroundColor:"white", borderColor:"#E1E1E1" }}>
                      <img className='mobileViewOappsFeatureCardIcon' style={{width:'40px', margin:'20px'}} src={value.featureCommunicationIcon}></img>
                      <h2 style={{fontSize:"20px"}} align="center">{value.featureHead}</h2>
                      <p className='bottomPad' align="center">
                        "{value.featureBody}"
                      </p>
                      <div align="center" className={value.marginTop}>
                      <a style={{fontSize:"18px"}}  target='_blank' href={value.featureBlock}>Learn More <img src={RightArrow}></img></a>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
        </div>
      </div>
    </section>
  </>
  );
}
export default OappsFeature;

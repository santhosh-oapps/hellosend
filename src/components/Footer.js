import React from 'react';
import {Col, Row, List } from 'antd';
import { HomeOutlined, CustomerServiceOutlined, AuditOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined, FileTextOutlined, YoutubeOutlined } from '@ant-design/icons';

const data = [
    {
      title: 'Home',
      icon: <HomeOutlined />,
      link: 'home'

    },
    {
      title: 'Our Integrations',
      icon: <CustomerServiceOutlined />,
      link: 'our-integrations'
    },
    {
      title: 'Terms of service',
      icon: <AuditOutlined />,
      link: 'https://help.oapps.xyz/portal/en/kb/articles/terms-and-conditions'
    },
    {
      title: 'Privacy policy',
      icon: <AuditOutlined />,
      link: 'https://help.oapps.xyz/portal/en/kb/articles/privacy-policy-for-oapps'
    },
  ];

  const dataKB = [
    {
      title: 'SMS for Zoho',
      link: 'https://help.oapps.xyz/portal/en/kb/articles/ringcentral-bulk-sms-zoho-crm'
    },
    {
      title: 'SMS for Shopify',
      link: 'https://help.oapps.xyz/portal/en/kb/articles/oapps-sms-for-shopify'
    },
    {
      title: 'SMS for Hubspot',
      link: 'https://help.oapps.xyz/portal/en/kb/articles/hubspotomnichannel'
    },
    {
      title: 'SMS for Pipedrive',
      link: 'https://help.oapps.xyz/portal/en/kb/articles/pipedrive-twilio-sms'
    },
  ];

const Footer = () => (
  <div  className='topPad bottomPad footer' >
  <Row justify="center" className='footer-top' style={{backgroundColor:"#0E1330"}}>
      <Col xl={8} md={24} xs={24} className='footer footerFirstCol'>
        <div className="col-lg-3 col-md-6 footer-info">
            <div className='footerheader'>OAppS</div>
            <div className='oappsFooterText'>Providing integrations for any cloud products to make a better customer engagement by harnessing the
              power of partnership.
            </div>
          </div>
      </Col>
      <Col xl={8} md={12} xs={24} className='footer footerSecondCol'>
        <Row className='footer-info'>
            <div className='footerUsefulLinksHeader footerheader usefulLinks'>Useful Links</div>
      <Col xl={12} md={12} xs={12} >
        <List className='footerUsefulLinksList'
        dataSource={data}
        renderItem={(item) => (
          <List.Item className='textColorwhite'>
            <List.Item.Meta className='usefullinkText'
              avatar={
                item.icon
              }
              title={<a className='textColorwhite' target='blank' href={item.link}>{item.title}</a>}
            />
          </List.Item>
        )}
      />
      </Col>
      <Col xl={12} md={12} xs={12}>
        <List className='footerUsefulLinksList'
        dataSource={dataKB}
        renderItem={(item) => (
          <List.Item className='textColorwhite'>
            <List.Item.Meta className='usefullinkText'
              title={<a className='textColorwhite footerFileIcon' target='blank' href={item.link}><FileTextOutlined /> {item.title}</a>}
            />
          </List.Item>
        )}
      />
      </Col>
      
    </Row>
    </Col>
      <Col xl={8} md={12} xs={24} className='footer footerThirdCol'>
        <Row className='footer-info'>
        <div className='footerUsefulLinksHeader footerheader footerContactUsHeader'>Contact us</div>
       <div className='footerUsefulLinkssList footerContactUsList'>
       <Col xl={18} md={18} xs={24}>
         <strong>OAppS Technologies PVT LTD</strong><br />
         <strong>No 28 Inthra Nagar</strong><br />
         <strong>Thanjavur - 613007</strong><br />
         <strong>TamilNadu</strong><br />
         <strong>India</strong><br />
         <strong>Email:</strong> help@oapps.xyz
         </Col>
       </div>
       <div className='footerUsefulLinksListIcons footerSocialIcons'><a style={{color:"white", paddingRight:"10px"}} target='blank' href="https://twitter.com/OAppS4"><TwitterOutlined /></a> <a style={{color:"white", paddingRight:"10px"}} target='blank' href="https://www.facebook.com/OAppSxyz-542419402917448"><FacebookOutlined /></a> <a style={{color:"white", paddingRight:"10px"}} target='blank' href="https://www.instagram.com/oappstechnologies/"><InstagramOutlined /></a><a style={{color:"white"}} target='blank' href="https://www.youtube.com/@oapps7498"><YoutubeOutlined /></a></div>
    </Row></Col>
    </Row>
  </div>
);


export default Footer;

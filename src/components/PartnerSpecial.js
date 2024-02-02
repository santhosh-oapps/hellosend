import React  from 'react';
import { Row, Col,  Typography, List, Button } from 'antd';
import '../assets/PartnerCSS/partner.css';
import zohoPartner from '../img/Partner/zoho-partner-512.png';
import pipedrivePartner from '../img/Partner/pipedrive.png';
import hubspotPartner from '../img/Partner/hubspotcrm.png';
import shopifyPartner from '../img/Partner/shopify.png';
import { CheckOutlined } from '@ant-design/icons';
import RightArrow from "../img/RightArrow.png"
 
const { Title, Paragraph } = Typography;
const dataZoho = [
  {
    title: 'Conversational View',
  },
  {
    title: 'Two-way SMS',
  },
  {
    title: 'Automated SMS',
  },
  {
    title: 'SMS Templates',
  }
];

const dataPipedrive = [
  {
    title: 'Automated SMS',
  },
  {
    title: 'Conversational View',
  },
  {
    title: 'Two-way SMS',
  },
  {
    title: 'SMS Templates',
  }
];
const dataHubspot = [
  {
    title: 'Two-way SMS',
  },
  {
    title: 'Automated SMS',
  },
  {
    title: 'SMS Templates',
  },
  {
    title: 'Inbox',
  }
];
const dataShopify = [
  {
    title: 'Inbox',
  },
  {
    title: 'Automated SMS',
  },
  {
    title: 'Two-way SMS',
  },
  {
    title: 'Segmentation',
  }
];

const OappsParterSpl = () => {
  // const navigate = useNavigate();

  const gotoZohoApps = () => {
    window.open('/SMS-For-Zoho', '_blank');
    
  };
  const gotoPipedriveApps = () => {
    const baseUrl = window.location.origin;
    const relativePath = 'SMS-For-Pipedrive';
    const url = `${baseUrl}/${relativePath}`;
    window.open(url, '_blank');

    // window.open('pipedrivemessage/pipe', '_blank');
  }

  const gotoShopifyApps = () => {
    window.open('/SMS-For-Shopify', '_blank');
  }

  const gotoHubspotApps = () => {
    window.open('SMS-For-Hubspot', '_blank');
  }

  return (
    <>
   
    <div className='PartnerMoblieView' style={{backgroundColor:'white'}} >
    <Row gutter={16} style={{marginLeft:'50px', marginRight:'50px'}}>
      <Col xl={12} md={12} xs={24} >
        
          <div className="block parterSectionSpace parterSectionSpaceZoho serviceCard">
            <Row onClick={gotoZohoApps}>
            <Col  span={6} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          
        }}>
            
          <img src={zohoPartner} alt="Image1" className="block-image partnerImageSizeIn"  />
          
          </Col>
          <Col span={18}>
          <div className="block-content">
          {/* <ScrollAnimation animateIn="fadeInUp"> */}
            <Title level={4} style={{color:"black"}} className='PartnerTitle'>SMS for Zoho</Title>
            {/* </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft"> */}
            <Paragraph className='partnerParaMoblieViewRemove'>
            Zoho's short message service (SMS) feature facilitates efficient customer communication through text messages, enabling businesses to streamline engagement and reach customers promptly and generate quality leads. 
            </Paragraph>
            <List
                          dataSource={dataZoho}
                          className='partnerList'
                          renderItem={(item) => (
                            <List.Item style={{ padding:'0px', border: 'none', color:"black" }}>
                              <List.Item.Meta
                                avatar={<CheckOutlined />}
                                title={item.title}
                                
                              />
                            </List.Item>
            
            
                          )}
                        />
                        <div style={{marginTop:"10px"}}>
            <a className='partnerSpecialLearnMore'  style={{fontSize:"18px"}} align="left" target='_blank'>
                        Learn more <img src={RightArrow}></img></a>
                        </div>
            {/* </ScrollAnimation> */}
          </div>
          </Col>
          </Row>
          
        </div>
      </Col>
      <Col xl={12} md={12} xs={24} >
        <div className="block parterSectionSpace parterSectionSpacePipedrive serviceCard" >
            <Row onClick={gotoPipedriveApps}>
            <Col  span={6} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
            
          <img src={pipedrivePartner} alt="Image1" className="block-image partnerImageSizeIn" />
          
          </Col>
          <Col span={18}>
          <div className="block-content">
          {/* <ScrollAnimation animateIn="fadeInUp"> */}
            <Title level={4} style={{color:"black"}} className='PartnerTitle'>SMS for Pipedrive,</Title>
            {/* </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight"> */}
            <Paragraph className='partnerParaMoblieViewRemove'>
            SMS in Pipedrive enables instant communication, leveraging high open rates for messages and response rates for effective engagement with leads and customers. 
            </Paragraph>
            <List
              dataSource={dataPipedrive}
              className='partnerList'
              renderItem={(item) => (
                <List.Item style={{ padding:'0px', border: 'none', color:"black"  }}>
                  <List.Item.Meta
                    avatar={<CheckOutlined />}
                    title={item.title}
                  />
                </List.Item>
              )}
            />
            <div style={{marginTop:"10px"}}>
            <a className='partnerSpecialLearnMore'  style={{fontSize:"18px"}} align="left" target='_blank'>
                        Learn more <img src={RightArrow}></img></a>
                        </div>

            {/* </ScrollAnimation> */}
          </div>
          </Col>
          </Row>
        </div>
      </Col>
      <Col xl={12} md={12} xs={24} 
      >
        <div className="block parterSectionSpace parterSectionSpaceShopify serviceCard">
            <Row onClick={gotoShopifyApps}>
            <Col span={6} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
            
          <img src={shopifyPartner} alt="Image1" className="block-image partnerImageSizeIn" />
          
          </Col>
          <Col span={18}>
          <div className="block-content">
          {/* <ScrollAnimation animateIn="fadeInUp"> */}
            <Title style={{color:"black"}} level={4} className='PartnerTitle'>SMS for Shopify,</Title>
            {/* </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight"> */}
            <Paragraph className='partnerParaMoblieViewRemove'>
            SMS is a powerful tool for Shopify, allowing businesses to send order notifications, recover abandoned carts, and boost customer engagement and conversion rates. 
            </Paragraph>
            <List
              dataSource={dataShopify}
              className='partnerList'
              renderItem={(item) => (
                <List.Item style={{ padding:'0px', border: 'none', color:"black"  }}>
                  <List.Item.Meta
                    avatar={<CheckOutlined />}
                    title={item.title}
                  />
                </List.Item>
                
                
              )}
            />
            {/* <Link to="/shopify">
     <button type="button">
     View more
     </button>
 </Link> */}

<div style={{marginTop:"10px"}}>
            <a className='partnerSpecialLearnMore'  style={{fontSize:"18px"}} align="left" target='_blank'>
                        Learn more <img src={RightArrow}></img></a>
                        </div>
            {/* </ScrollAnimation> */}
          </div>
          </Col>
          </Row>
        </div>
        
      </Col>
      <Col xl={12} md={12} xs={24}>
        <div className="block parterSectionSpace parterSectionSpaceHubspot serviceCard">
            <Row onClick={gotoHubspotApps}>
            <Col span={6} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
            
          <img src={hubspotPartner} alt="Image1" className="block-image partnerImageSizeIn" />
          
          </Col>
          <Col span={18}>
          <div className="block-content">
          {/* <ScrollAnimation animateIn="fadeInUp"> */}
            <Title style={{color:"black"}} level={4} className='PartnerTitle'>SMS for Hubspot</Title>
            {/* </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft"> */}
            <Paragraph className='partnerParaMoblieViewRemove'>
            SMS in HubSpot CRM offers direct communication, high open/response rates, personalized messaging, workflow integration, multi-channel capabilities, generate more leads and tracking/analytics for effective customer engagement.
            </Paragraph>
            <List
              dataSource={dataHubspot}
              className='partnerList'
              renderItem={(item) => (
                <List.Item style={{ padding:'0px', border: 'none', color:"black"  }}>
                  <List.Item.Meta
                    avatar={<CheckOutlined />}
                    title={item.title}
                  />
                </List.Item>
                
                
              )}
            />
             <div style={{marginTop:"10px"}}>
            <a className='partnerSpecialLearnMore' style={{fontSize:"18px"}} align="left" target='_blank'>
                        Learn more <img src={RightArrow}></img></a>
                        </div>
            {/* </ScrollAnimation> */}
          </div>
          </Col>
          </Row>
        </div>
      </Col>
    </Row>
    
    </div>
    </>
  );
};


export default OappsParterSpl;

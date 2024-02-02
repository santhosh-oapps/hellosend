import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import './assets/zohoApp.css';
import { CheckOutlined } from '@ant-design/icons';
import imageOne from "../../img/Partner/twilio.png"
import Blob from "../Blob"
import zohocrm from "../../img/PortfolioImage/Video/ZohoDeskTwilioSMS Integration.mp4"


const { Title, Text } = Typography;

const ZohoDeskTwilioApps= () => {
    
    const data = [
        {
          title: 'SMS and MMS Inbound and Outbound Support',
        },
        {
          title: 'SMS Template Support',
        },
        {
          title: 'SMS Outbound Initiator',
        },
        {
          title: 'Instant Acknowledgement Support',
        },
      ];
    
      return (<>
        
        <div id="partnerZoho" style={{paddingTop:'3%'}}>
    
        <div className="zoho-types" style={{backgroundColor:"azure"}}>
        <Blob/>
        <Row style={{padding:'2%', textAlign:'left'}}>
          <Row align={'center'}>
        <Title  level={2}>Zoho Desk - Twilio SMS</Title>
            <Text type="secondary">This plugin enables SMS & MMS communication between agents and end users & option to automatically send SMS on status change. End users can ask for help via SMS/MMS and support engineers can send the solution through the same channel.</Text>
                </Row>
            <Col xl={10} md={24} xs={24} offset={2}>
              
              <List
                
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item className='partnerListItem'>
                    <List.Item.Meta
                        avatar={<CheckOutlined style={{ marginLeft: '8px' }} />}
                        title={item.title}
                        style={{paddingTop:'15px'}}
                    />
                    </List.Item>
                    )}
                    />
              <Button className='partnerButton' target='_blank' href='https://marketplace.zoho.com/vendor/www-oapps-xyz' align="center" type="primary">Install</Button>
            </Col>
            <Col xl={10} md={24} xs={24} offset={2}  style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
               <video
                  style={{
                  width: '80%',
                  height: 'auto',
                  }}
                  controls
                  src={zohocrm}
      />
            </Col>
        </Row>
        </div>
        </div>
        </>
      );
    };
export default ZohoDeskTwilioApps
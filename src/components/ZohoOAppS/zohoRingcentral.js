import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import './assets/zohoApp.css';
import { CheckOutlined } from '@ant-design/icons';
import imageOne from "../../img/Partner/ringcentral.png"
import Blob from "../Blob"

const { Title, Text } = Typography;

const ZohoRingcentralApps= () => {
    
    const data = [
        {
          title: 'Two-Way SMS: Send and receive SMS directly from the Zoho CRM Interface.',
        },
        {
          title: 'Personalized Templates: Create and manage multiple SMS templates for personalized messaging.',
        },
        {
          title: 'SMS Automation: Streamline communication, automate workflows, and send/receive SMS messages seamlessly within Zoho CRM.',
        },
        {
          title: 'Targeted SMS Campaigns: Send personalized SMS campaigns to segmented users.',
        },
        {
          title: 'User-based Phone number: Configure user specific phone number and enable user specific SMS communication',
        },
        {
          title: 'SMS History: View inbound and outbound message history with easy Zoho CRM records lookup.',
        },
      ];
    
      return (<>
        
        <div id="partnerZoho" style={{paddingTop:'3%'}}>
    
        <div className="zoho-types" style={{backgroundColor:"aliceblue"}}>
        <Blob/>
        <Row style={{padding:'2%', textAlign:'left'}}>
          <Row align={'center'}>
        <Title  level={2}>Zoho CRM - RingCentral SMS</Title>
            <Text type="secondary">Experience seamless SMS communication within Zoho CRM with the RingCentral SMS MMS integration. Send templated and custom SMS messages, as well as MMS messages, to clients worldwide, all from the Zoho CRM user interface. Enhance your customer interactions, automate SMS communications, and boost your Zoho CRM capabilities with this powerful SMS integration.</Text>
                </Row>
        <Col xl={10} md={24} xs={24} offset={2}  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
               <img style={{ width: '100%', height: 'auto' }}  src={imageOne} alt="Image1" />
            </Col>
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
              <Button className='partnerButton' target='_blank' href='https://marketplace.zoho.com/app/crm/ringcentral-high-volume-sms-for-zoho-crm' align="center" type="primary">Install</Button>
            </Col>
            
        </Row>
        </div>
        </div>
        </>
      );
    };
export default ZohoRingcentralApps
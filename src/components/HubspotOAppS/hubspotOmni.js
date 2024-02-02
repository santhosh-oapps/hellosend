import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import imageOne from "../../img/Partner/im.png"
import Blob from "../Blob"

const { Title, Text } = Typography;

const HubSpotOmniApps= () => {
    
    const data = [
        {
          title: 'Support for All Top Messaging services',
        },
        {
          title: 'Send Individual or Bulk SMS in lesser clicks.',
        },
        {
          title: 'Reduce manual by Templates and Automatic messages',
        },
        {
          title: "The same look and feel for all messaging services in one place",
        },
        {
            title: "Option to switch between services to manage messages individually also across all messaging services.",
          },
          {
            title: "Manage all Inbound and Outbound SMS with intuitive filters.",
          },
      ];
    
      return (<>
        
        <div id="partnerZoho" style={{paddingTop:'3%'}}>
    
        <div className="zoho-types" style={{backgroundColor:"ivory"}}>
        <Blob/>
        <Row style={{padding:'2%', textAlign:'left'}}>
          <Row align={'center'}>
        <Title  level={2}>Hubspot - Instant Messenger</Title>
            <Text type="secondary">This plugin enables SMS communication between agents and end-users from HubSpot User Interface.<br>
            </br>
            Texting is a powerful tool for Lead Generation in Marketing / Servicing / Sales and for many domains. Omni Channel Messaging tool helps one, to pack all the top messaging players under one roof. With the OmniChannel messaging solution, the user can Send / Receive / Automate / Manage the messages from all messaging services in one place.</Text>
                </Row>
            
            <Col xl={10} md={24} xs={24} offset={2}  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
               <img style={{ width: '200px', height: 'auto' }}  src={imageOne} alt="Image1" />
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
              <Button className='partnerButton' target='_blank' href='https://app-eu1.hubspot.com/ecosystem/24964595/marketplace/apps/marketing/sms/twilio-sms-305342' align="center" type="primary">Go to start free trail</Button>
            </Col>
        </Row>
        </div>
        </div>
        </>
      );
    };
export default HubSpotOmniApps
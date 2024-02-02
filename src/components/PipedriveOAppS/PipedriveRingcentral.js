import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import imageOne from "../../img/Partner/ringcentral.png"
import Blob from "../Blob"

const { Title, Text } = Typography;

const PipedriveRingcentralApps= () => {
    
    const data = [
        {
          title: 'Outbound Messages Send SMS/MMS messages to Pipedrive Deals, Contacts, or Leads modules using RingCentral Bulk SMS for Pipedrive.',
        },
        {
          title: 'Inbound Messages Receive SMS/MMS from any number with Pipedrive messaging.',
        },
        {
          title: 'SMS History All inbound and outbound messages will be automatically recorded under their respective Deals, Contacts, or Leads in the Notes section with a timeline.',
        },
        {
          title: 'Inbox Manage and view both incoming and outgoing messages in a conversational format by tracking them in one centralized location.',
        },
        {
          title: 'Templated Messages Save unlimited templates with mail merge fields and friendly names for sending personalized messages.',
        },
        {
          title: 'Bulk SMS Seamlessly send personalized bulk messages with just a few clicks.',
        },
        {
          title: 'Automated SMS Automate the Templated or Customized SMS.',
        },
      ];
    
      return (<>
        
        <div id="partnerZoho">
    
        <div className="zoho-types" style={{backgroundColor:"aliceblue"}}>
        <Blob/>
        <Row style={{padding:'2%', textAlign:'left'}}>
          <Row align={'center'}>
          <Title  level={2}>Pipedrive - RingCentral SMS</Title>
            <Text type="secondary"> Effectively communicate with your clients worldwide by rapidly sending and receiving personalized or templated SMS/MMS messages. Optimize your business communication with RingCentral Bulk SMS for Pipedrive.</Text>
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
              <Button className='partnerButton' target='_blank' href='https://www.pipedrive.com/en/marketplace/app/ring-central-bulk-sms-for-pipe-drive/bf3b6e48d57d2ce6' align="center" type="primary">Go to start free trail</Button>
            </Col>
            
        </Row>
        </div>
        </div>
        </>
      );
    };
export default PipedriveRingcentralApps
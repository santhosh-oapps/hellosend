import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import pipedriveTwilio from "../../img/PortfolioImage/Video/Pipedrive - Twilio SMS MMS Extension. Activate SMS in Pipedrivetosendsingle_bulkmessages..mp4"
import Blob from "../Blob"

const { Title, Text } = Typography;

const PipedriveTwilio = () => {
    
    const data = [
        {
          title: 'Outbound Messages: Send SMS/MMS messages to Pipedrive Deals, Contacts, or Leads modules using Twilio SMS/MMS.',
        },
        {
          title: 'Inbound Messages: Receive SMS/MMS from any number with Pipedrive messaging.',
        },
        {
          title: 'SMS History: All inbound and outbound messages will be automatically recorded under their respective Deals, Contacts, or Leads in the Notes section with a timeline.',
        },
        {
          title: 'Inbox: Manage and view both incoming and outgoing messages in a conversational format by tracking them in one centralized location.',
        },
        {
          title: 'Templated Messages: Save unlimited templates with mail merge fields and friendly names for sending personalized messages.',
        },
        {
          title: 'Bulk SMS: Seamlessly send personalized bulk messages with just a few clicks.',
        },
        {
          title: 'Automated SMS: Automate the Templated or customized SMS.',
        },
      ];
    
      return (<>
        
        <div id="partnerZoho">
          <div className="zoho-types" style={{backgroundColor:"ivory"}}>
            <Blob/>
           
          <Row style={{padding:'2%', textAlign:'left'}}>
            <Row align={'center'}>
          <Title  level={2}>Pipedrive - Twilio SMS</Title>
            <Text type="secondary"> Activate SMS in Pipedrive to send personalized single/bulk messages, and track all messages in notes under corresponding Leads/Contacts/Deals.</Text>
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
              <Button className='partnerButton' target='_blank' align="center" href='https://www.pipedrive.com/en/marketplace/app/twilio-sms-mms-for-pipedrive/1fce535308ea4267' type="primary">Go to start free trail</Button>
            </Col>
            <Col xl={10} md={24} xs={24} offset={2}  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
               <video
                  style={{
                  width: '80%',
                  height: 'auto',
                  }}
                  controls
                  src={pipedriveTwilio}
      />
            </Col>
        </Row>

        
        </div>
        </div>
        </>
      );
    };
    export default PipedriveTwilio;

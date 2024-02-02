import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import './assets/zohoApp.css';
import { CheckOutlined } from '@ant-design/icons';
import Blob from "../Blob"
import zohocrm from "../../img/PortfolioImage/Video/TwilioSMSMMSforZohoCRM-OAppS.mp4"


const { Title, Text } = Typography;

const ZohoTwilio = () => {
    
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
          title: 'SMS History: View inbound and outbound message history with easy Zoho CRM records lookup.',
        },
        {
          title: 'Multi-Number Support: Easily add and enable SMS communication from multiple phone numbers.',
        },
      ];
    
      return (<>
        
        <div id="partnerZoho" style={{paddingTop:'3%'}}>
          <div className="zoho-types" style={{backgroundColor:"ivory"}}>
            <Blob/>
           
          <Row style={{padding:'2%', paddingBottom:'0px', textAlign:'left'}}>
            <Row align={'center'}>
          <Title level={2}>Zoho CRM - Twilio SMS</Title>
              {/* </ScrollAnimation> */}
            <Text type="secondary">Experience seamless SMS communication within Zoho CRM with the Twilio SMS MMS integration. Send templated and custom SMS messages, as well as MMS messages, to clients worldwide, all from the Zoho CRM user interface. Enhance your customer interactions, automate SMS communications, and boost your Zoho CRM capabilities with this powerful SMS integration.</Text>
            
            </Row>
            <Col xl={10} md={24} xs={24} offset={2}>
            {/* <ScrollAnimation animateIn="fadeInUp"> */}
              
              <List
                
                itemLayout="horizontal"
                dataSource={data}
                style={{padding:'15px'}}
                renderItem={(item, index) => (
                    <List.Item className='partnerListItem'  >
                    <List.Item.Meta
                        avatar={<CheckOutlined style={{ marginLeft: '1px' }} />}
                        title={item.title}
                        style={{paddingTop:'15px'}}
                    />
                    </List.Item>
                    )}
                    />
              <Button className='partnerButton' align={"end"} target='_blank' href='https://marketplace.zoho.com/app/crm/twiliosmszohocrm' type="primary">Install</Button>
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
    export default ZohoTwilio;

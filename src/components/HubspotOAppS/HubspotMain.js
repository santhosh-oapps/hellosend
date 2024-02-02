import { Col, Row, Divider, List } from 'antd';
import pipedriveHubspot from "../../img/Partner/hubspotcrm.png"
import omniChannel from "../../img/homePageImage/HomePage.png"
import { Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {NavBarTop} from "../NavBar"


const { Title } = Typography;

const dataZoho = [
    {
      title: 'Automated SMS: Streamline communication with pre-scheduled text messages, saving time and ensuring consistent delivery for tasks like reminders, notifications, and marketing campaigns.',
    },
    {
      title: 'Conversational View: Streamline communication by organizing messages in a threaded, conversation-like format for clear and easy-to-follow discussions.',
    },
    {
      title: 'Two-way SMS: Send and receive messages, engage customers, and provide instant support. Enhance communication and foster meaningful conversations.',
    },
    {
      title: 'SMS Templates: Personalize messages using saved templates with dynamic Hubspot fields for efficient and engaging communication.',
    },
    {
        title: 'Inbox : Inbound and outbound messages are seamlessly recorded in the Inbox, featuring smart filtering options for efficient organization and easy access.',
      }
  ];
const HubspotHeaderPage = () => (
    
    <>
      <NavBarTop />
      <Row style={{padding:'50px', backgroundColor:"white", marginTop:"80px"}}>
        <Col xl={24} md={24} xs={24}>
            <Row style={{padding:'50px', border:"1px solid black", borderRadius:"50px"}}>
                <Col align='center' xl={12} md={24} xs={24}>
                    <img  src={pipedriveHubspot} alt="Image1" className="block-image"  style={{width: "25%"}} />
                    <Title style={{textAlign:"left", paddingTop:'30px'}} level={3}>SMS for Hubspot</Title>
                    <List
                      dataSource={dataZoho}
                      style={{ textAlign: 'left' }}
                      renderItem={(item) => {
                      const parts = item.title.split(':');
                      const boldText = parts[0].trim(); // Get the text before the colon and trim any extra spaces
                      const normalText = parts.slice(1).join(':').trim(); // Get the text after the colon and join any remaining parts

                      return (
                        <List.Item style={{ padding: '0px', border: 'none' }}>
                          <List.Item.Meta
                            avatar={<CheckOutlined />}
                            title={
                              <span>
                                <span style={{ fontWeight: 'bold' }}>{boldText}</span>: {normalText}
                              </span>
                             }
                          />
                        </List.Item>
        );
      }}
    />
                </Col>
                <Divider style={{backgroundColor:"black", height: 'auto',width:'1px' }} type="vertical" />
                <Col justify="center" align="middle"  xl={11} md={24} xs={24}>
                    <img  src={omniChannel} alt="Image1" style={{width:"100%", height:"auto"}}  />
                    </Col>
            </Row>
        </Col>
        
      </Row>
      
    </>
    
  );
  export default HubspotHeaderPage;
  
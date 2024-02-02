import { Col, Row, Divider, List } from 'antd';
import zohoPartner from "../../img/Partner/zoho-partner-512.png"
import zohoChannel from "../../img/Partner/zohochannel.png"
import "./zohoOappS.css"
import { Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {NavBarTop} from "../NavBar"


const { Title } = Typography;

const dataZoho = [
    {
      title: 'Conversational View: Streamline communication by organizing messages in a threaded, conversation-like format for clear and easy-to-follow discussions.',
    },
    {
      title: 'Two-way SMS: Send and receive messages, engage customers, and provide instant support. Enhance communication and foster meaningful conversations.',
    },
    {
      title: 'Automated SMS: Streamline communication with pre-scheduled text messages, saving time and ensuring consistent delivery for tasks like reminders, notifications, and marketing campaigns.',
    },
    {
      title: 'SMS Templates: Personalize messages using saved templates with dynamic Hubspot fields for efficient and engaging communication.',
    },
    {
        title: 'Inbox : Inbound and outbound messages are seamlessly recorded in the Inbox, featuring smart filtering options SMS for Zoho .',
      }
  ];
const ZohoHeaderPage = () => (
    
    <>
      <NavBarTop />
      <Row className='mobileViewPartner' style={{padding:'50px', backgroundColor:"white", marginTop:"80px"}}>
        <Col xl={24} md={24} xs={24}>
            <Row className='moblieViewMainContent' style={{padding:'50px', border:"1px solid black", borderRadius:"50px"}}>
                <Col align='center' xl={12} md={24} xs={24}>
                    <img  src={zohoPartner} alt="Image1" className="block-image zohoOAppSSize"  />
                    <Title style={{textAlign:"left", paddingTop:'30px'}} level={3}>SMS for Zoho</Title>
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
                <Col justify="center" align="middle" style={{paddingTop:"50px"}} xl={11} md={24} xs={24}><img  src={zohoChannel} alt="Image1" style={{width:"50%", height:"auto"}}  /></Col>
            </Row>
        </Col>
        
      </Row>
      
    </>
    
  );
  export default ZohoHeaderPage;
  
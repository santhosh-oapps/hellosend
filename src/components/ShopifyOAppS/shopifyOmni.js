import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import imageOne from "../../img/Partner/im.png"
import Blob from "../Blob"

const { Title, Text } = Typography;

const ShopifyOmniApps= () => {
    
    const data = [
        {
          title: 'Inbound and outbound SMS/MMS: Send inbound and outbound SMSs/MMSs that will be recorded as tickets and threads inside Shopify',
        },
        {
          title: 'Instant customer engagement: Reach your customers where they are to facilitate quick and convenient interactions for efficient issue resolution.',
        },
        {
          title: 'Bulk and individual SMS: Send bulk SMS messages to multiple customers at once using top SMS providers. Configure multiple phone numbers and alpha senders.',
        },
        {
          title: "Boost efficiency: Increase your support team's productivity and responsiveness so they can handle customer queries and provide timely assistance directly through SMS.",
        },
      ];
    
      return (<>
        
        <div id="partnerZoho" style={{paddingTop:'3%'}}>
    
        <div className="zoho-types" style={{backgroundColor:"aliceblue"}}>
        <Blob/>
        <Row style={{padding:'2%', textAlign:'left'}}>
          <Row align={'center'}>
        <Title  level={2}>Shopify - Instant Messenger</Title>
            <Text type="secondary">Streamline customer interactions and optimize support team efficiency with this versatile SMS extension for Shopify. Seamlessly integrate SMS capabilities into your platform, empowering your team to engage with customers through text messages, ensuring prompt assistance and a comprehensive customer service experience.</Text>
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
              {/* <Button className='partnerButton' target='_blank' href='https://marketplace.zoho.com/app/desk/instant-messenger-for-zoho-desk' align="center" type="primary">Install</Button> */}
            </Col>
        </Row>
        </div>
        </div>
        </>
      );
    };
export default ShopifyOmniApps
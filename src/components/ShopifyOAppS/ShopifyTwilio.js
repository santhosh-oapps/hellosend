import React  from 'react';
import { Row, Col, Typography, List, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import shopifyTwilio from "../../img/PortfolioImage/Video/OAppS-shopifyPartner.mp4"
import Blob from "../Blob"

const { Title, Text } = Typography;

const ShopifyTwilioApps= () => {
    
    const data = [
        {
          title: 'Multiple Twilio number support',
        },
        {
          title: 'Auto-Customer Contact import with search option',
        },
        {
          title: 'Bulk SMS',
        }
        
      ];
    
      return (<>
        
        <div id="partnerZoho" style={{paddingTop:'3%'}}>
    
        <div className="zoho-types" style={{backgroundColor:"ivory"}}>
        <Blob/>
        <Row style={{padding:'2%', textAlign:'left'}}>
        <Row align={'center'}>
        <Title  level={2}>Shopify - Instant Messenger</Title>
            <Text type="secondary">1-Click Twilio Bulk SMS by OAppS integrates Twilio SMS API with your shop. OAppS is here to boost your store sales instantly by sending promotional messages and deals to all your customers through mobile phones. These promotions and deals come in the form of clickable links that direct customers to the online store to make a purchase.</Text>
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
              <Button className='partnerButton' target='_blank' href='https://apps.shopify.com/oapps_twilio_sms?st_source=autocomplete' align="center" type="primary">Install</Button>
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
                  src={shopifyTwilio}
      />
            </Col>
        </Row>
        </div>
        </div>
        </>
      );
    };
export default ShopifyTwilioApps
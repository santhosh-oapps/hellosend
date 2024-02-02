import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Card, Button, Input, Badge, Drawer, List } from "antd";
import "../assets/PortfolioCSS/portfolio.css";
import { appsDataList }  from '../Utils/Portfolio/PortfolioImportantShow';
import portfolioImageTemplate from "../img/PortfolioImage/portfolioTemplate.png";
import portfolioImageBlue from "../img/PortfolioImage/PortfolioBlue.png";
import portfolioImageRed from "../img/PortfolioImage/PortfolioRed.png";
import portfolioImageSkyBlue from "../img/PortfolioImage/PortfolioSkyblue.png"
import portfolioImageLightBlue from "../img/PortfolioImage/PortfolioLightBlue.png"
import zohodesk from "../img/PortfolioImage/Video/ZohoDeskTwilioSMS Integration.mp4"
import zohocrm from "../img/PortfolioImage/Video/TwilioSMSMMSforZohoCRM-OAppS.mp4"
import pipedrive from "../img/PortfolioImage/Video/Pipedrive - Twilio SMS MMS Extension. Activate SMS in Pipedrivetosendsingle_bulkmessages..mp4"
import { ArrowRightOutlined } from '@ant-design/icons';



import { QuestionCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Link } from 'react-router-dom';

const { Search } = Input;

const { Title } = Typography;

const Portfolio = (props) => {
  const [data, setData] = useState(appsDataList);
  const [filterText, setFilterText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const inputRef = useRef(null);
  console.log(props)


  const seeMorePortfolio = () => {
    // Your click event handling logic goes here
    window.open('our-integrations');
    console.log('Button clicked!');
  };

  const handleSearch = (value) => {
    console.log(value);
    setSearchText(value);
  };
  useEffect(() => {
      const results = appsDataList.filter((item) => item.filterBy.includes(filterText));
      setData(results);
  }, [filterText]);

  useEffect(() => {
      const lowerCaseSearchText = searchText.toLowerCase();
      const results = appsDataList.filter((item) =>
        item.filterBy.includes(lowerCaseSearchText)
      );
      setData(results);
  }, [searchText]);

   

  const filterTextFunction = (filterBy, buttonName) => {
    setFilterText(filterBy);
    setActiveButton(buttonName);
  };

  const [visible, setVisible] = useState({});
  const showDrawer = (cardId) => {
    setVisible((prevState) => ({
      ...prevState,
      [cardId]: true,
    }));
  };

  const closeDrawer = (cardId) => {
    setVisible((prevState) => ({
      ...prevState,
      [cardId]: false,
    }));
  };



  return (
    <div id="portfolio" className="topPad backColor">
      <Row
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Col>
          <Title level={2} className="section-header" style={{marginBottom:'32px'}}>
            Portfolio
          </Title>
        </Col>
      </Row>
      <Row align="end" > <Button  style={{marginRight:"2%", borderRadius:"15px", backgroundColor:"#151934", color:"white"}} onClick={seeMorePortfolio}>View More<ArrowRightOutlined /></Button></Row>
      <Row  justify="center" align="middle">
        {data.map((value, index) => (

          <Col xl={6} md={24} xs={24}
            style={{ padding: "15px", display: "block" }}
            key={index}
            className={`${value.filterBy} col-sm-3 portfolio-item wow fadeInUp`}
          >                
              <Card 
              className="CardShadow"
                cover={
                  <div >
                    {value.installLinkOfcanvas && (
                  <a 
                  onClick={() => showDrawer(value.leftServiceLogo)}
                  >
                  <img
                    className="portfolioHover"
                    alt="exampldde"
                    src={value.portfolioImageOne === "portfolioImageBlue" ? portfolioImageBlue: value.portfolioImageOne === "portfolioImageRed" ? portfolioImageRed: value.portfolioImageOne === "portfolioImageSkyBlue" ? portfolioImageSkyBlue:value.portfolioImageOne === "portfolioImageRed" ? portfolioImageRed:portfolioImageLightBlue}
                    style={{width:"100%"}}

                  />
                  </a>
                    )}
                    {!value.installLinkOfcanvas && (
                  <a target="_blank"
                  href={value.installationLink}
                  >
                  <img
                    className="portfolioHover"
                    alt="exampldde"
                    src={value.portfolioImageOne === "portfolioImageBlue" ? portfolioImageBlue: value.portfolioImageOne === "portfolioImageRed" ? portfolioImageRed: value.portfolioImageOne === "portfolioImageSkyBlue" ? portfolioImageSkyBlue:value.portfolioImageOne === "portfolioImageTemplate" ? portfolioImageTemplate:portfolioImageLightBlue}
                    style={{width:"100%"}}
                  />
                  </a>
                    )}
                  </div>
                }
                
                actions={[]}
              >
                <span
                  style={{ width: "18rem" }}
                  key={index}
                  value={value.leftServiceLogo}
                >
                  <div
                    className={`${value.leftServiceLogo}-image-position logo-image`}
                    style={{ marginTop: "-45%", marginLeft: "50%" }}
                  ></div>
                  <div
                    className={`${value.rightServiceLogo}-image-position logo-image`}
                    style={{ marginTop: "-45%", marginLeft: "25%" }}
                  ></div>
                 
                  <a
                    target="_blank"
                    href={value.installationLink}
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open"></i>
                  </a>
                  <a
                    href={value.helpLink}
                    target="_blank"
                    className="link-preview"
                    title="Help Document"
                  >
                    <i className="bi bi-question-circle-fill"></i>
                  </a>
                  <div>
                    <Row>
                      <Col span={23}>
                        <h4 align="center">

                        {value.installLinkOfcanvas && (
                            <a
                              target="_blank"
                              className="portfolioTitle"
                              key={value.installLinkOne}
                              onClick={() => showDrawer(value.leftServiceLogo)}
                              
                            >
                              {value.leftServiceName} - {value.rightServiceName}
                            </a>
                          )}
                          {!value.installLinkOfcanvas && (
                            <a
                              target="_blank"
                              className="portfolioTitle"
                              href={value.installationLink}
                            >
                              {value.leftServiceName} - {value.rightServiceName}
                            </a>
                          )}
                        </h4>
                        <h5 align="center">{value.description}</h5>
                      </Col>
                      <Col span={1}>
                        <a
                          style={{
                            position: "absolute",
                            bottom: "55px",
                            left: "17px",
                          }}
                          target="_blank"
                          href={value.helpLink}
                        >
                          <QuestionCircleOutlined />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </span>
              </Card>
          </Col>
         
        ))}
        {data.map((value, index) => (
          
          <Row key={index}>
          {value.installLinkOfcanvasTest && (
        <Drawer
        key={value.leftServiceLogo}
        title={`${value.leftServiceName}-${value.rightServiceName}`}
        placement="right"
        size="large"
        closable={false}
        onClose={() => closeDrawer(value.leftServiceLogo)}
        visible={visible[value.leftServiceLogo]}
        extra={
            <div align={'end'}><Button type="primary"  target="_blank" href={value.installationLink}>Install</Button></div>
        }
      >
        <Row align={'center'}>
          <Row style={{backgroundColor: "black", marginBottom:"10px"}} align={'center'} >
            
          {value.zohodeskVideo && (
        <video
        style={{
          width: '80%',
          height: '350px',
          marginLeft: 20,
          border:"1px solid black",
          marginBottom:"15px",
        }}
        controls
        autoPlay
        src={zohodesk}
      />
      )}
      {value.zohocrmVideo && (
        <video
        style={{
          width: '80%',
          height: '350px',
          marginLeft: 20,
          border:"1px solid black",
          marginBottom:"15px",
        }}
        controls
        autoPlay
        src={zohocrm}
      />
      )}
      {value.pipedriveVideo && (
        <video
        style={{
          width: '80%',
          height: '350px',
          marginLeft: 20,
          border:"1px solid black",
          marginBottom:"15px",
        }}
        controls
        autoPlay
        src={pipedrive}
      />
      )}
      </Row><Row>
            <List
              size="small"
              
              header={<div>{value.installLinkOfcanvasTest}</div>}
              bordered
              dataSource={value.list}
              renderItem={(item) => <List.Item >{item}</List.Item>}
            />
            </Row>
             
          </Row>
        {/* Content for the drawer */}
      </Drawer>
      )}
      </Row>
       ))}
      </Row>
      
    </div>
  );
};

export default Portfolio;

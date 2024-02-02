import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Card, Button, Input, Badge, Drawer, List } from "antd";
import { Helmet } from 'react-helmet';
import "../../assets/PortfolioCSS/portfolio.css"
import { appsDataList }  from '../../Utils/Portfolio/portfolioFilterObject';
import NavBarTop from '../../components/NavBar'
// import { appsDataList } from "./../constants/AppConstants";
import portfolioImageTemplate from "../../img/PortfolioImage/portfolioTemplate.png";
import portfolioImageBlue from "../../img/PortfolioImage/PortfolioBlue.png";
import portfolioImageRed from "../../img/PortfolioImage/PortfolioRed.png";
import portfolioImageSkyBlue from "../../img/PortfolioImage/PortfolioSkyblue.png"
import portfolioImageLightBlue from "../../img/PortfolioImage/PortfolioLightBlue.png"
import zohodesk from "../../img/PortfolioImage/Video/ZohoDeskTwilioSMS Integration.mp4"
import zohocrm from "../../img/PortfolioImage/Video/TwilioSMSMMSforZohoCRM-OAppS.mp4"
import pipedrive from "../../img/PortfolioImage/Video/Pipedrive - Twilio SMS MMS Extension. Activate SMS in Pipedrivetosendsingle_bulkmessages..mp4"
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
// import { Footer } from "antd/es/layout/layout";
import Footer from "../../components/Footer.js";



const { Search } = Input;

const { Title } = Typography;

const PortfolioAllCardsShow = (props) => {
  // const [ofcanvasListData, setDatas] = useState(offcanvasListText)
  // console.log(":::::: portfolio ofcanvasListData :::::::: ",ofcanvasListData);
  const [data, setData] = useState(appsDataList);
  const [filterText, setFilterText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const inputRef = useRef(null);


  const seeMorePortfolio = () => {
    // Your click event handling logic goes here
    window.open('portfolioAll', '_blank');
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
    console.log("filterTextFunction >>>>>>>>>>>",filterBy);
    console.log(":::::::::: buttonName >>>>>>>>",buttonName);
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
    <>
    <Helmet>
      <title>Streamline Your Workflow: Automated Text Message Integrations for your CRM with HelloSend</title>
      <meta name="description" content="Unleash the power of SMS marketing with HelloSend's integrations for top CRM, customer support, and ecommerce solutions." />
    </Helmet>
    <NavBarTop />
    <div className="container-fluid">
    <div id="portfolio" className="topPad">
      <Row
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop:"80px" }}
      >
      <Col align='center'>
          <Title level={1} style={{color:"black"}} className="section-header">
          Streamline Your Workflow: Seamlessly Integrate HelloSend with Your Favorite CRM
          </Title>
          <p className="integ-txt">HelloSend integrates seamlessly with top CRM providers like Salesforce, Zoho CRM, Pipedrive, Hubspot. You can send 1-1 sms, bulk sms and automated SMS notifications to your contacts / leads / accounts. No need to switch between different tools to send SMS to your contact. HelloSend sits right inside your CRM and works closely with any workflow that you create.</p>
        </Col>
      <Col align='center'>
      <Search
        placeholder="search"
        style={{ width: 300 }}
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        
      />
      </Col>
      </Row>
      <Row className="" align="center">
        <Col span={24}>
          <ul className="portfolio-flters">
            {[
              { filter: "filter-one", buttonName: "ZohoDesk" },
              { filter: "filter-crm", buttonName: "ZohoCRM" },
              { filter: "filter-sp", buttonName: "Shopify" },
              { filter: "filter-hs", buttonName: "HubSpot" },
              { filter: "filter-message", buttonName: "SMS Marketing" },
              { filter: "filter-zde", buttonName: "Zendesk" },
              { filter: "filter-pd", buttonName: "Pipedrive" },
              { filter: "filter-sync", buttonName: "DataSync" },
              { filter: "filter-fd", buttonName: "FreshDesk" },
              { filter: "filter-zs", buttonName: "ZohoSign" },
              { filter: "filter-zm", buttonName: "ZohoMail" },
              { filter: "filter-sf", buttonName: "Salesforce" },
            ].map(({ filter, buttonName }) => (
              <Button
                key={buttonName}
                type={activeButton === buttonName ? "primary" : "default"}
                className="portfolioBgBtn"
                onClick={(e) => filterTextFunction(filter, buttonName)}
                data-filter={`${filter}`}
              >
                {buttonName}
               </Button>
            ))}
          </ul>
        </Col>
      </Row>
      <Row style={{ padding: "25px" }} justify="center" align="middle" className="porfolio-wrap">
        {data.map((value, index) => (

          <Col xl={6} md={8} xs={24}
            style={{ padding: "15px", display: "block" }}
            key={index}
            className={`${value.filterBy} col-sm-3 portfolio-item wow fadeInUp`}
          >
            <Col>
            {value.comingSoonBanner && (
              <Badge.Ribbon text="Upcoming" color="volcano">
                <Card
                className="CardShadow"
                  cover={
                    <img
                      className="portfolioHover"
                      alt="example"
                      src={value.portfolioImageOne === "portfolioImageBlue" ? portfolioImageBlue: value.portfolioImageOne === "portfolioImageRed" ? portfolioImageRed:value.portfolioImageOne === "portfolioImageSkyBlue" ? portfolioImageSkyBlue:value.portfolioImageTemplate === "portfolioImageTemplate" ? portfolioImageTemplate:portfolioImageLightBlue}
                    />
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
              </Badge.Ribbon>
            )}
            </Col>
            {!value.comingSoonBanner && (
                
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
                    src={value.portfolioImageOne === "portfolioImageBlue" ? portfolioImageBlue: value.portfolioImageOne === "portfolioImageRed" ? portfolioImageRed:value.portfolioImageOne === "portfolioImageSkyBlue" ? portfolioImageSkyBlue:value.portfolioImageTemplate === "portfolioImageTemplate" ? portfolioImageTemplate:portfolioImageLightBlue}
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
                    src={value.portfolioImageOne === "portfolioImageBlue" ? portfolioImageBlue: value.portfolioImageOne === "portfolioImageRed" ? portfolioImageRed:value.portfolioImageOne === "portfolioImageSkyBlue" ? portfolioImageSkyBlue:value.portfolioImageOne === "portfolioImageTemplate" ? portfolioImageTemplate:portfolioImageLightBlue}
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
            )}
            
            
            
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
    </div>
        <Footer />
    </>
  );
};

export default PortfolioAllCardsShow;

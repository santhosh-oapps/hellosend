import React, { useState, useRef } from 'react';
import { Col, Row, Carousel } from 'antd';
import { Helmet } from 'react-helmet';
import { Typography, Button } from 'antd';
import imageUrlMobile from '../img/homePageImage/MobileFirstSlideHomePage.png'
import imageUrlTargetSMS from '../img/homePageImage/Targeted SMS.png'
import imageUrlCRM from '../img/homePageImage/CRM.png'
import GetStartedBtn from '../img/GetStarted.png'


const { Title } = Typography;

const HomePageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const HandleCarouselChange = (index) => {
    setCurrentIndex(index);
    // Start the GIF animation on current slide
    setIsGifPlaying(true);
  };
  const HandleCarouselBeforeChange = (from, to) => {
    // Stop the GIF animation before transitioning to the next slide
    setIsGifPlaying(false);
  };
  const [isGifPlaying, setIsGifPlaying] = useState(true);
  const data = [
    {
      title: "Turbocharge Your Sales",
      titleSec: "Convert, Engage, and Win with Conversational Texting!",
      description: "Convert more leads into loyal customers with engaging Conversational Texting that speaks directly to their needs!",
      imageUrl: imageUrlMobile,
      imageSize: "85%",
      marginLeftSet: "marignLeftSet",
      imageWidthMobileView:"imageWidthMobileView" 
      
    },
    {
      title: "Cross-Sell and Upsell Synergy",
      titleSec: "Reach Your Targeted Users",
      description: "Reach your Right Audience at Right Time with Right Message to increase your sales.",
      imageUrl: imageUrlTargetSMS,
      imageSize: "85%",
      homepageTopPadding:"homepageTopPaddding"
    },
    {
      title: "Level Up Your CRM ",
      titleSec : "Integrate SMS into CRM System",
      description: "Create engagement through SMS offers, premium upgrades that are seamlessly incorporated into your CRM system.",
      imageUrl: imageUrlCRM,
      imageSize: "85%",
      imageWidthMobileView:"imageWidthMobileView"
      
    },
    // Add more objects for additional Carousels
  ];

  return (
    <>
    <Helmet>
      <title>HelloSend | Your One-Stop Shop for SMS Marketing</title>
      <meta name="description" content="HelloSend: Reach your customers anytime, anywhere with SMS marketing and CRM." />
      <script type="application/ld+json">
          {
            `{
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "HelloSend",
            "alternateName": "Hello Send",
            "url": "https://hellosend.com/",
            "logo": "https://hellosend.com/static/media/OAppSLogo.841fabdbd5019a01dc65.png",
            "sameAs": [
              "https://twitter.com/i/flow/login?redirect_after_login=%2FOAppS4",
              "https://www.instagram.com/oappstechnologies/",
              "https://www.facebook.com/oappsxyz",
              "https://www.youtube.com/@oapps7498"
            ]
          }`
          }
</script>
    </Helmet>
      <div className='carousel-wrapper'>
        <Carousel autoplay autoPlaySpeed={5000}
        ref={carouselRef}
          afterChange={HandleCarouselChange}
          beforeChange={HandleCarouselBeforeChange} // Disable autoplay
          className='homePageSize'>
          {data.map((item, index) => (
            <div key={index}>
              <Row id='home' className="HomePageContent homePageBackgroundColor">
                <Col span={24}>
                  <Row justify="center" align="middle" className={item.homepageTopPadding} >
                    <Col xl={11} md={12} xs={24} className='HomePageColFirst'>
                      <Col align="center" span={24} >
                        <Title level={2} className='HomePageColOneTitle'>
                          {item.title}
                        </Title>
                        <Title level={4} className='HomePageColOneTitleSec'>
                          {item.titleSec}
                        </Title>
                      </Col>
                      <Col align="center" xl={24} md={24} xs={24} className=' HomePagePara w-50'>
                        {item.description}
                      </Col>
                      <Col span={24} className='HomePageButtom'>
                        <Button type="link" style={{display:'block'}} className='homePageGetStartedButtonbackgroundColor homePageButtonNormalView' href="#portfolio">
                        <img src={GetStartedBtn} style={{width:'40%'}}></img>
                        </Button>
                      </Col>
                    </Col>
                    <Col align='center' style={{paddingTop:'3%'}} className={item.marginLeftSet} xl={13} md={24} xs={24}>
                      <img
                      
                        style={{ width: item.imageSize, height: 'auto' }}
                        src={item.imageUrl}
                        alt="image description"
                        className={item.imageWidthMobileView}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className='HomePageButtom'>
                  <Button style={{display:'none'}} type="link" className='homePageGetStartedButtonbackgroundColor homePageButtonMoblieView' href="#portfolio">
                        <img src={GetStartedBtn} style={{width:'70%'}}></img>
                        </Button>
                        </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
};

export default HomePageSection;
import React, { useState, useEffect } from 'react';
import { Carousel, Typography, Row, Col, Card, Button } from 'antd';
import testimonialImageCusOne from "../img/testimonial1.png";
import testimonialImageCusTwo from "../img/testimonial-2.png";
import testimonialImageCusThree from "../img/noimg.jpeg";
import testimonialImageCusFour from "../img/testimonial-4.jpg";
import testimonialImageCusFive from "../img/testimonial-5.png";
import testimonialImageCusSix from "../img/testimonial-4.png";
import testimonialImageCusSeven from "../img/tt-7.png";
import testimonialImageCusEight from "../img/tt-8.png";
import testimonialImageCusNine from "../img/tt-9.png";
import testimonialImageCusTen from "../img/tt-1.png";

import testimonialImageCus11 from "../img/noimg.jpeg";
import testimonialImageCus12 from "../img/ScottDienerTt-12.png";
import testimonialImageCus13 from "../img/SusanClarkTt-13.png";
import testimonialImageCus14 from "../img/homeallianceTt-14.jpeg";
import testimonialImageCus15 from "../img/JackHutseyTt-15.png";
import testimonialImageCus16 from "../img/JoeyDomingoTt-16 .png";
import testimonialImageCus17 from "../img/odysianTt-17.jpeg";

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import '../App.css';
const { Title } = Typography;


const Carddata = [
  {   
      id:1,
      testimonialImage: 'testimonialImageCusOne',
      testimonialName: 'CHUN XIE',
      testimonialQla: 'Cyrusher Sports Team',
      testimonialQuates: 'Transfomed my slaes within a month. Best SMS Integration tool. Customer support helped me to solve the problem online shortly. Now I can use short message service. Enhance customer communication.'
  },
  {   
      id:2,
      testimonialImage: 'testimonialImageCusTwo',
      testimonialName: 'Carlos Hoyer',
      testimonialQla: 'Customer Support Manager, Filld',
      testimonialQuates: 'We have been working with HelloSend&apos;s multi-line extension since we migrated. This new extension is almost flawless. All previous issues have been completely resolved. We&apos;re very pleased with the service as well. Fixes have been FAST!'
  },
  
  {
      id:4,
      testimonialImage: 'testimonialImageCusFour',
      testimonialName: 'Matt Brandon',
      testimonialQla: 'Freelancer',
      testimonialQuates: 'Boosted my sales. HelloSend, best extension, ease of use and smooth installation. Requested a feature request, awesome support, thanks Andrew.'
  },
  {
    id:3,
    testimonialImage: 'testimonialImageCusThree',
    testimonialName: 'Alistishari',
    testimonialQla: 'Alistishari Org',
    testimonialQuates: 'This short message service extension is awesome! works perfectly. Compared to other ones we tried, this supports Arabic (and likely other). The support group (especially Andrew) is very nice and very patient. They help us set up the application and fix some issues at our end(not in the app) via zoom. Great app, no negatives. Thank you for developing this! Transform my sales from 0 to 100'
},
  {
      id:5,
      testimonialImage: 'testimonialImageCusFive',
      testimonialName: 'Ryan DeBok',
      testimonialQla: 'Orange Rhythm, LLC',
      testimonialQuates: 'Amazing! Great app for integrating Twilio into Zoho Desk. Responsive devs. Just fixed a couple bugs that I reported and released a new version today!'
  },
  {
      id:6,
      testimonialImage: 'testimonialImageCusSix',
      testimonialName: 'Raymond Polanco',
      testimonialQla: 'Trade-solutionsgrp.com',
      testimonialQuates: 'Love this app.'
  },
  {
      id:7,
      testimonialImage: 'testimonialImageCusSeven',
      testimonialName: 'Kevin Vozar',
      testimonialQla: 'Director of Business Development, Cabins for you',
      testimonialQuates: 'My last review was pretty bad. Since then I have worked with them and installed the new update and it actually works really well to both individual as well as group txt...though I&apos;ll only use for individual leads. There are a couple of small bugs they need to address but nothing that will keep me from using!'
  },
  {
      id:8,
      testimonialImage: 'testimonialImageCusEight',
      testimonialName: 'Tamra Young',
      testimonialQla: 'Director',
      testimonialQuates: 'Very responsive and helpful.'
  },
  {
      id:9,
      testimonialImage: 'testimonialImageCusNine',
      testimonialName: 'Richelle Anderson',
      testimonialQla: 'Director',
      testimonialQuates: 'Just purchased the extension. Smooth install. One request... Can you make the button available on the detail page as well as list view ? I know many that search for a contact and there is no way to text them without going page by page through Leads or Contacts.Thanks.'
  },
  {
      id:10,
      testimonialImage: 'testimonialImageCusTen',
      testimonialName: 'Zach Spader',
      testimonialQla: 'cornerstonesolutions.com',
      testimonialQuates: 'Team was quick to respond to technical issues and seems to be adding new functionality quickly.'
  },
  {
    id:11,
    testimonialImage: 'testimonialImageCus11',
    testimonialName: 'Daniel Fioramonti',
    testimonialQla: 'internetcafe.games',
    testimonialQuates: 'Product does what it says it will do, has texting, templates, and can communicate quickly'
},
{
  id:12,
  testimonialImage: 'testimonialImageCus12',
  testimonialName: 'Scott Diener',
  testimonialQla: 'scottdiener.com',
  testimonialQuates: 'Have used RingCentral for years and looking forward to using the new SMS version with workflows and bulk messaging. Dinesh helped identify some start up linking issues so Thank You!'
},
{
  id:13,
  testimonialImage: 'testimonialImageCus13',
  testimonialName: 'Susan Clark',
  testimonialQla: 'cornerstonesolutions.com',
  testimonialQuates: 'The support team was great about helping us to fix on configuration error.'
},
{
  id:14,
  testimonialImage: 'testimonialImageCus14',
  testimonialName: 'Sardor Umrdinov',
  testimonialQla: 'homealliance.com',
  testimonialQuates: 'Issues exist everywhere but don&apos;t panic. I contacted support and we were able to solve the issue, very well done. thank you. Recommend using this plugin'
},
{
  id:15,
  testimonialImage: 'testimonialImageCus15',
  testimonialName: 'Jack Hutsey',
  testimonialQla: 'arriaga.co',
  testimonialQuates: 'Dinesh is a top notch technician! He helped me figure out what was wrong with my extension. Very excited to use! Best short message extension, made for all CRM&apos;s especially for Zoho'
},
{
  id:16,
  testimonialImage: 'testimonialImageCus16',
  testimonialName: 'Joey Domingo',
  testimonialQla: 'hotwireheating.com.au',
  testimonialQuates: "Great support from the developers! SMS and FB integration works perfectly." 
},
{
  id:17,
  testimonialImage: 'testimonialImageCus17',
  testimonialName: 'Tom Harris',
  testimonialQla: 'odyssiansales.co.uk',
  testimonialQuates: "Good extension, works well, pretty straightforward to set up. Devs are helpful. Will continue to use the service. For Pipedrive - Twilio SMS extension."
},
]

const TestimonialsImages = () => {
  const [data, setData] = useState(3);
  const [isMobileView, setIsMobileView] = useState(false);
  const cardChunks = chunkArray(Carddata, isMobileView ? 1 : data);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselRef = React.createRef();

  console.log("data", data)// Default value for desktop view

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 768); // Adjust the breakpoint (768) as per your requirement for mobile view
    }

    // Listen to window resize event to handle mobile view
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check for mobile view on component mount

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    carouselRef.current.prev();
  };

  const prevSlide = () => {
    carouselRef.current.next();
  };
 
  return ( 
    <>
    <section id="testimonials" className="wow fadeInUp topPad testimonialBackground">
      <div className="container">
        <header className="section-headerBelowSpace">
          <Row align="center">
            <Col>
              <Title level={2} className='section-headerTestimonials' >Testimonials</Title>
            </Col>
          </Row>
        </header>
        <Carousel autoplay ref={carouselRef}>
          {cardChunks.map((chunk, index) => (
            <div key={index}>
              <Row gutter={[16, 16]}>
                {chunk.map((card) => (
                  <Col key={card.id} xs={24} sm={24} md={8} align="center">
                    <Card className='testimonialCard'>
                      <Row style={{height:"20%"}}>
                        <Col xs={24} sm={24} md={8} style={{padding:"0px", margin:"0px"}}>
                          <img  style={{borderRadius:"8px", width:"70%"}} src={card.testimonialImage === "testimonialImageCusOne" ? testimonialImageCusOne:card.testimonialImage === "testimonialImageCusTwo" ? testimonialImageCusTwo:card.testimonialImage === "testimonialImageCusThree" ? testimonialImageCusThree:card.testimonialImage === "testimonialImageCusFour" ? testimonialImageCusFour:card.testimonialImage === "testimonialImageCusFive" ? testimonialImageCusFive:card.testimonialImage === "testimonialImageCusSix" ? testimonialImageCusSix:card.testimonialImage === "testimonialImageCusSeven" ? testimonialImageCusSeven:card.testimonialImage === "testimonialImageCusEight" ? testimonialImageCusEight:card.testimonialImage === "testimonialImageCusNine" ? testimonialImageCusNine:card.testimonialImage === "testimonialImageCusTen" ? testimonialImageCusTen:card.testimonialImage === "testimonialImageCus11" ? testimonialImageCus11:card.testimonialImage === "testimonialImageCus12" ? testimonialImageCus12:card.testimonialImage === "testimonialImageCus13" ? testimonialImageCus13:card.testimonialImage === "testimonialImageCus14" ? testimonialImageCus14:card.testimonialImage === "testimonialImageCus15" ? testimonialImageCus15:card.testimonialImage === "testimonialImageCus16" ? testimonialImageCus16:testimonialImageCus17}
                            alt="testimonialImage" className='testimonial-img' />
                          </Col>
                        <Col align="left" xs={24} sm={24} md={16} >
                          <Row >
                          <h3 >{card.testimonialName}</h3>
                          </Row>
                          <Row align="justify">
                          <h5 >{card.testimonialQla}</h5>
                          </Row>
                        </Col>
                        </Row>
                      <Row>
                      
                      
                      </Row>
                      
                      
                      <p className='testimoialQuates' style={{ fontSize:"14px",margin:"15px" }}>
                        "{card.testimonialQuates}"
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
        <div align='center'>
        <Button onClick={prevSlide} style={{marginRight:'10px'}}><ArrowLeftOutlined /></Button>
        <Button onClick={nextSlide}><ArrowRightOutlined /></Button>
        </div>
      </div>
    </section>
  </>
  );
}

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
export default TestimonialsImages;

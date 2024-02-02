import { useState, useEffect } from "react";
import oappsLogo from "../img/OAppSLogo.png";
import "../index.css";
import { Col, Row, Carousel } from "antd";


export const NavBarTop = () => {

  const [current, setCurrent] = useState("mail");
  
  // const onClick = (e) => setCurrent(e.key);
  const [navBarIcon, setNavBarIcon] = useState("topnav");

  
  useEffect(() => {
    let t = document.querySelectorAll(".top-bar");
    console.log("scrollllllll t >>>>>>>>>>>>", t);
    t.length > 0 &&
      t.forEach((e) => {
        let t = e.offsetTop;
        window.addEventListener("scroll", function () {
          window.scrollY > t
            ? e.classList.add("topbar-scrolldown")
            : e.classList.remove("topbar-scrolldown");
        });
      });
  }, []);

  const NavMobileView = () => {
    if (navBarIcon === "topnav") {
      setNavBarIcon("topnav responsive");
    } else {
      setNavBarIcon("topnav");
    }
  };

  const goToPage = (page) => {
    var test =  window.location.href;
    console.log("test", test)
    var baseUrl;
      if (test.includes("xyz")) {
         baseUrl = test.substring(0, test.indexOf("xyz") + 3);
      } else if (test.includes("com")) {
        baseUrl = test.substring(0, test.indexOf("com") + 3);
      } else if(test.includes("net")) {
        baseUrl = test.substring(0, test.indexOf("net") + 3);
      } else{
        baseUrl = test.substring(0 , test.indexOf("1")+1)
    
      }
    window.location.href = baseUrl + "/" + page;

  };

  return (
    <>
      <div className="top-bar">
        <div className={navBarIcon} id="myTopnav">
          <Row justify="space-between">
            <Col span={3}>
              <a href="home" className="oappsLogoHome">
                <img
                  src={oappsLogo}
                  className="oappsLogoSize "
                  align="left"
                  alt="logo"
                />
              </a>
            </Col>
            <div align="center" className="topBarMenuLeftAlignForNormalView">
            <Col span={24}>
              <div className="navTopdMenu">
              
                <a
                  className="navTopBorderAndBackground navTopHome"
                  onClick={() => goToPage("home")}
                >
                  Home
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="our-integrations"
                >
                  Our Integrations
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="about"
                  //onClick={() => goToPage("about")}
                >
                  About
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="https://hellosend.com/blogs/"
                >
                  Blogs
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="contact-us"
                >
                  Contact Us
                </a>   

              </div>
            </Col>
            </div>
            <div align="center" className="topBarMenuLeftAlignForMoblieView">
            <Col>
              <div className="navTopdMenu">
              
                <a
                  className="navTopBorderAndBackground navTopHome"
                  onClick={() => goToPage("home")}
                >
                  Home
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="our-integrations"
                >
                  Our Integrations
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="about"
                >
                  About
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="https://hellosend.com/blogs/"
                >
                  Blogs
                </a>
                <a
                  className="navTopBorderAndBackground"
                  href="contact-us"
                >
                  Contact
                </a>
                <a
                  className="navTopBorderAndBackground navTopBorderAndBackgroundMobileView"
                  target="_blank"
                  href="https://oapps.zohobookings.com/#/customer/help"
                >
                  Book Tech Support
                </a>   
                <a className="icon" onClick={NavMobileView}>
                  <i className="fa fa-bars"></i>
                </a>
              </div>
            </Col>
            </div>
            <Col span={4} >
              
              <div className="navTopdMenu navTopdMenuMobileView">
                <a
                  className="navTopBorderAndBackground navTopHome"
                  style={{ backgroundColor: "#1a974b", fontSize: "13px", border:"none" }}
                  href="https://oapps.zohobookings.com/#/customer/help"
                  target="_blank">
                  Book Tech Support
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default NavBarTop;

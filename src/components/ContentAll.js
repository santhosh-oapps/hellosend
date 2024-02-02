import React from "react";
import {Routes,Route } from "react-router-dom";
import 'antd/dist/reset.css';
import "../index.css";
import HomePageSection from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import About from '../components/About.js'
import Contacts from '../components/Contacts.js'
import ContactOApps from '../components/ContactOApppS';
import PortfolioAllCardsShow from '../components/PortfolioAllCards/PortfolioAllCardsShow.js'
// import OappsParterPipedrive from '../components/PipedriveOAppS/PartnerPipedrive'
import { Layout } from "antd";
const { Content } = Layout;

function ContentAll() {
  return (
    <Content>
      <Routes>
        <Route exact path="home" element={<HomePageSection />} />
        <Route exact path="integrations" element={<PortfolioAllCardsShow />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contacts" element={<Contacts />} />
        {/* <Route exact path="/pipedrivemessage" element={<OappsParterPipedrive />} /> */}
      </Routes>
    </Content>
  );
}

export default ContentAll;

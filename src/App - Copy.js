import React, { useState } from "react";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";

import { Layout } from "antd";

import NavBarTop from "./components/NavBar";
import ContentAll from "./components/ContentAll";
import HomePageSection from "./components/HomePage";
import OappsParter from "./components/Partner.js";
import OappsParterSpl from "./components/PartnerSpecial.js";
import Facts from "./components/Facts.js";
import Portfolio from "./components/Portfolio.js";
import TestimonialsImages from "./components/Testimonials.js";
import ContactOApps from "./components/ContactOApppS.js";
import Footer from "./components/Footer.js";
import PortfolioAllCardsShow from './components/PortfolioAllCards/PortfolioAllCardsShow.js'
import PartnerZoho from "./components/ZohoOAppS/PartnerZohoRouter";
import PartnerPipedrive from "./components/PipedriveOAppS/PartnerPipedriveRouter";
import PartnerShopify from "./components/ShopifyOAppS/PartnerShopifyRouter";
import PartnerHubspot from "./components/HubspotOAppS/PartnerHubspotRouter"
import PortfollioAll from "./components/PortfolioAllCards/PortFolioAllCardsRouter"
import OAppSIntegrations from "./components/OAppSIntegrations"
import OAppSPageContent from "./components/OAppSPage"
import OappsFeature from "./components/OappsFeature"
import OappsChannels from "./components/OappsChannels"
import OAppSProvider from "./components/OappsProvider"
import OurCustomer from './components/OurCustomer'
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";

const App = () => {
  let locationHref = window.location.href;
  const hasZohoMessage = locationHref.includes('SMS-For-Zoho');
  const hasPipedriveMessage = locationHref.includes('SMS-For-Pipedrive');
  const hasShopifyMessage = locationHref.includes('SMS-For-Shopify');
  const hasHubspotMessage = locationHref.includes('SMS-For-Hubspot');
  const hasPortfolio = locationHref.includes('SMS-For-CRM');

  const script = document.createElement("script");
    script.src =
      "https://cdn.pagesense.io/js/deskoappsxyz/ffc2aa6d77c8431d8479ddae3f8efc28.js";
    script.async = true;
    document.body.appendChild(script);
    

  return (
    <>
      
      {hasZohoMessage ? (
        <Router>
          <PartnerZoho />
        </Router>
      ) :
      hasPipedriveMessage ? (
        <Router>
          <PartnerPipedrive />
        </Router>
      ) : 
      hasShopifyMessage ? (
        <Router>
          <PartnerShopify />
        </Router>
      ) : 
      hasHubspotMessage ? (
        <Router>
          <PartnerHubspot />
        </Router>
      ) :
      hasPortfolio ? (
        <Router>
          {/* <NavBarTop /> */}
          <PortfollioAll />
        </Router>
      ) : (
        <Router>
          <Layout>
            <ContentAll />
            <AllPages />
          </Layout>
        </Router>
      )}
    </>
  );
};

const AllPages = () => {
  const currentPath = window.location.pathname;
 
  const lastPathSegment = currentPath.split('/').filter(Boolean).pop();

 if(lastPathSegment == "Contacts" || lastPathSegment == "about")
 {
  return (
    <>
      <NavBarTop />
      <Footer />
    </>
  );
 }
  else{
    return (
      <>
        <NavBarTop />
        <HomePageSection />
        <OAppSPageContent/>
        <OappsFeature/>
        <OappsChannels/>
        <OAppSProvider/>
        <Facts />
        <OappsParter />
        <OappsParterSpl />
        {/*<Portfolio />*/}
        <OAppSIntegrations />
        <OurCustomer/>
        <TestimonialsImages />
        {/*<About />*/}
        <ContactOApps />
        <Footer />
      </>
    );
  }

 }





const AllPages2 = () => {
  return (
    <>
      <NavBarTop />
      <HomePageSection />
      <OAppSPageContent/>
      <OappsFeature/>
      <OappsChannels/>
      <OAppSProvider/>
      <Facts />
      <OappsParter />
      <OappsParterSpl />
      {/*<Portfolio />*/}
      <OAppSIntegrations />
      <OurCustomer/>
      <TestimonialsImages />
      {/*<About />*/}
      <ContactOApps />
      <Footer />
    </>
  );
};

export default App;

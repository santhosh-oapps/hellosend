import React  from 'react';
import ZohoTwilio from "./ZohoTwilio";
import ZohoRingcentralApps  from "./zohoRingcentral";
import ZohoHeaderPage from  "./ZohoMain"
import ZohoDeskTwilioApps from "./ZohoDeskTwilio";
import ZohoDeskOmniApps from "./zohoDeskOmni"

const OappsParterZoho = () => {
    
      return (
      <>
        <ZohoHeaderPage/>
        <ZohoTwilio/>
        <ZohoRingcentralApps/>
        <ZohoDeskTwilioApps/>
        <ZohoDeskOmniApps/>
        </>
      );
    };

export default OappsParterZoho;


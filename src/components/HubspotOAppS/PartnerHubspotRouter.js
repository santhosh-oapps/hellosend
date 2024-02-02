import React from "react";

import OappsParterHubspot from "./PartnerHubspot";

import { Routes, Route } from "react-router-dom";

const PartnerHubspot= () => {
  return (
    <Routes>
      <Route exact path="/SMS-For-Hubspot" element={<OappsParterHubspot/>} />
    </Routes>
  );
}

export default PartnerHubspot;

import React from "react";

import OappsParterPipedrive from "./PartnerPipedrive";

import { Routes, Route } from "react-router-dom";

const PartnerPipedrive= () => {
  return (
    <Routes>
      <Route exact path="SMS-For-Pipedrive" element={<OappsParterPipedrive />} />
    </Routes>
  );
}

export default PartnerPipedrive;

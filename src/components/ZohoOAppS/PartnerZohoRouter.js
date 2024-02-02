import React from "react";
import { Routes, Route } from "react-router-dom";
import OappsParterZoho from "./PartnerZoho"


const PartnerZoho= () => {
  return (
    <Routes>
      <Route exact path="/SMS-For-Zoho" element={<OappsParterZoho />} />
    </Routes>
  );
}

export default PartnerZoho;

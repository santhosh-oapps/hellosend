import React from "react";

import OappsParterShopify from "./PartnerShopify";

import { Routes, Route } from "react-router-dom";

const PartnerShopify= () => {
  return (
    <Routes>
      <Route exact path="/SMS-For-Shopify" element={<OappsParterShopify />} />
    </Routes>
  );
}

export default PartnerShopify;

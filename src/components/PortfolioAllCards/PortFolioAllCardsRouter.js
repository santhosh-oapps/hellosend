import React from "react";

import PortfolioAllCardsShow from "./PortfolioAllCardsShow";

import { Routes, Route } from "react-router-dom";

const PortfollioAll= () => {
  return (
    <Routes>
      <Route exact path="our-integrations" element={<PortfolioAllCardsShow />} />
    </Routes>
  );
}

export default PortfollioAll;

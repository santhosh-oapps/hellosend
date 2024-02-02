import React from 'react';


const importAll = (context) => {
    let images = {};
    context.keys().forEach((item) => {
      images[item.replace("./", "")] = context(item);
    });
    return images;
  };
  
  const logoImages = importAll(require.context("../img/OurCustomerLogos"));
  
  export default logoImages;
  
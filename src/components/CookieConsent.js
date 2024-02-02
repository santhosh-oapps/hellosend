import React, { useState } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const acceptCookies = () => {
    // Save user's cookie consent preference (e.g., in localStorage)
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null; // Hide the component if consent is given
  }

  return (
    <div className="cookie-consent">
      <p>This website uses cookies to improve your experience.</p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
};

export default CookieConsent;

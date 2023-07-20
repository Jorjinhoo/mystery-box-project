import React, { useEffect, useState } from 'react';

import './promo-status.css';

const PromoStatus = ({ promoStatus, setPromoStatus }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (promoStatus !== null) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setPromoStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [promoStatus, setPromoStatus]);

  return (
    <div className={`promo-status-container ${promoStatus ? 'promo-is-valid' : 'promo-is-not-valid'}`} id={visible ? "visible" : "hidden"}>
      {visible && promoStatus ? 'Promo code applied successfully' : 'Non-existent promo code'}
    </div>
  );
};

export default PromoStatus;
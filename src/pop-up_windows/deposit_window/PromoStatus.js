import React, { useEffect, useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import './styles/promo-status.css';

const PromoStatus = ({ promoStatus, setPromoStatus }) => {

  const [visible, setVisible] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');

  useEffect(() => {
    if (promoStatus !== null) {
      if(promoStatus){setPromoMessage('Promo code applied successfully')}else{setPromoMessage('Non-existent promo code')}
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setPromoStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [promoStatus, setPromoStatus]);

  return (
    <CSSTransition
      in={visible}
      timeout={2200}
      classNames="promo-status-transition"
      unmountOnExit
    >
      <div className={`promo-status-container ${promoStatus ? '' : 'promo-is-not-valid'}`}>
        {promoMessage}
      </div>
    </CSSTransition>
  )
}

export default PromoStatus;


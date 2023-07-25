import React, { useEffect, useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import './styles/low-balance-inform-banner.css';

const LowBalanceInformBanner = ({ lowBalanceInform, setLowBalanceInform }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    if (lowBalanceInform) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setLowBalanceInform(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [lowBalanceInform, setLowBalanceInform]);

  return (
    <CSSTransition
      in={visible}
      timeout={2200}
      classNames="lbib-transition"
      unmountOnExit
    >
      <div className="lbib-container">
      Not enough funds! Please top up your balance 
      </div>
    </CSSTransition>
  )
}

export default LowBalanceInformBanner;
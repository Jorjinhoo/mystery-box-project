import React, { useState } from "react";

import "./deposit-form.css";

const DepositForm = (props) => {
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromoCode = (e) => {
    e.preventDefault();
    if (promoCode === 'TEST') {
      props.setBalance();
      props.setVisible(false);
      props.setPromoStatus(true);
    }else{
      props.setPromoStatus(false);
    }
  };


  return (
    <div>
      <form className="top-up-form" onSubmit={handleApplyPromoCode}>
        <input name="promocode" className="input-deposit" maxLength={10} type="text" placeholder="Promo code (enter TEST to get 10.5 $)" value={promoCode} onChange={handlePromoCodeChange} required />
        <button type="submit" className="button-deposit">Apply</button>
      </form>
    </div>
  );
};

export default DepositForm;
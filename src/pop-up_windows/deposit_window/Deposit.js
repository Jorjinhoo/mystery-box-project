import React from "react";

import DepositForm from "./DepositForm.js";

import "./styles/deposit.css";

import mastercardvisa from "../../img/icons/mastercard-visa.svg";


const Deposit = (props) =>{

  let rootClasses
  if(props.visible){
    rootClasses = ("deposit-window__active")
  }

  return(
    <div className={`deposit-window ${rootClasses}`} onClick={() => props.setVisible(false)}>
      <div className="deposit-window-content" onClick={(e) => e.stopPropagation()}>
        <h1>Balance top up</h1>
        <div className="deposit-element">
          <div><p>Selected payment method</p><h3>CARD</h3></div>
          <img src={mastercardvisa} alt="" id="card" />
        </div>
        <DepositForm setBalance={props.setBalance} setVisible={props.setVisible} setPromoStatus={props.setPromoStatus} />
      </div>
    </div>
  )
}

export default Deposit;

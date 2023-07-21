import React from "react";

import "./account-item-card.css";

const AccountItemCard = (props) =>{
  return(
    <div className="account-item-card">
      <div className="account-item-card__buttons">
        <a href="/mimiammu" className="account-item-card-buttons__button" id="get-item-button">Withdraw</a>
        <a href="/mimimamu" className="account-item-card-buttons__button" id="sell-item-button">Sell</a>
      </div>
      <img src={props.img} alt="" />
      <div className="item-info">
        <p className="item-info__name">{props.itemName}</p>
        <p className="item-info__price">{props.itemPrice} $</p>
      </div>
    </div>
  )
}

export default AccountItemCard;

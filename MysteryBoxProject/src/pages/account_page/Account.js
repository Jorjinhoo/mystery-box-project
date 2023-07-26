import React, {useState} from "react";

import AccountItemCard from "./AccountItemCard.js";


import "./styles/account.css";
import "./styles/profile-card.css";
import "./styles/account-switches-group.css";


const Account = (props) =>{

  const [activeSwitch, setActiveSwitch] = useState('inventory');

  return(
    <main className="main" id="account-main">
      <div className="account-container" id="profile-card-container">
        <div className="profile-title">
          <h1>YOUR PROFILE</h1>
        </div>
        <div className="profile-card">
          <div className="profile-card__info">
            <img src={props.accountLogo} alt="" className="profile-card-info__img" />
            <div>
              <h2 className="profile-card-info__name">TestUser123</h2>
              <h4 className="profile-card-info__statistics">Cases opened: {props.casesOpened}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="account-container" id="account-switches-group">
          <div className={`account-switches-group__switch ${activeSwitch === 'inventory' ? 'account-switches-group__switch-active' : ''}`} onClick={() => setActiveSwitch('inventory')} id="inventory-switch">
            <p>Inventory</p>
          </div>
          <div className={`account-switches-group__switch ${activeSwitch === 'gift' ? 'account-switches-group__switch-active' : ''}`} onClick={() => setActiveSwitch('gift')} id="gift-switch">
            <p>Gifts</p>
          </div>
      </div>
      <div className="account-container" id="account-item-container">
        {props.accountItems.map((item, index) => (
          <AccountItemCard
            key={index}
            img={item.img}
            itemName={item.name}
            itemPrice={item.price}
            sellAccountItem={() => props.sellAccountItem(item.price, index)}
          />
        ))}
      </div>
    </main>
  )
}

export default Account;

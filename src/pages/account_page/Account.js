import React, {useState} from "react";

import AccountItemCard from "./AccountItemCard.js";
import ProfileCard from "./ProfileCard.js";


import "./styles/account.css";
import "./styles/account-switches-group.css";


const Account = (props) =>{

  const [activeSwitch, setActiveSwitch] = useState('inventory');

  return(
    <main className="main" id="account-main">
      <ProfileCard accountLogo={props.accountLogo} casesOpened={props.casesOpened} />
      <div className="account-container" id="account-switches-group">
          <div className={`account-switches-group__switch ${activeSwitch === 'inventory' ? 'account-switches-group__switch-active' : ''}`} onClick={() => setActiveSwitch('inventory')} id="inventory-switch">
            <p>Inventory</p>
          </div>
          <div className={`account-switches-group__switch ${activeSwitch === 'gift' ? 'account-switches-group__switch-active' : ''}`} onClick={() => setActiveSwitch('gift')} id="gift-switch">
            <p>Gifts</p>
          </div>
      </div>
      {activeSwitch === "inventory" ? (
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
      ) : (
        <div className="account-container" id="account-gifts-container">
          <div className="account-gift-card" style={{ color: 'white', fontSize: '20px', margin: '20px auto', fontFamily: 'unset', fontWeight: '700' }}>There are no gifts</div>
        </div>
      )}
    </main>
  )
}

export default Account;

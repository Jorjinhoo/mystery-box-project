import React from "react";

import AccountItemCard from "./AccountItemCard.js";


import "./styles/account.css";


const Account = (props) =>{

  
  return(
    <main className="main" id="account-main">
      <div className="account-container">
        {props.accountItems.map((item, index) => (
          <AccountItemCard
            key={index}
            img={item.img}
            itemName={item.name}
            itemPrice={item.price}
            sellAccountItem={props.sellAccountItem}
          />
        ))}
      </div>
    </main>
  )
}

export default Account;

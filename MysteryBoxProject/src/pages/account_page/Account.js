import React from "react";

import AccountItemCard from "./AccountItemCard";

import "./account.css";

import jordan from "../../img/items_imgs/clothing/jordan1-dark.webp";

const Account = () =>{
  return(
    <main className="main" id="account-main">
      <div className="account-container">
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
        <AccountItemCard img={jordan} itemName={"four"} itemPrice={10.99} />
      </div>
    </main>
  )
}

export default Account;

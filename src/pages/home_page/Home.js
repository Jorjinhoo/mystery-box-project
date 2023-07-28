import React from "react";

import "./styles/home.css";

import Box from "./Box.js";
import GiveawayCards from "./GiveawayCards.js";

import case01 from "../../img/boxes_imgs/case-01.webp";

import iphones from "../../img/items_imgs/gadgets/iphones-pmax-all-colours.webp";
import jordan from "../../img/items_imgs/clothing/jordan1-dark.webp";
import bag from "../../img/items_imgs/clothing/dior-white-bag.webp";
import airpodsMax from "../../img/items_imgs/gadgets/airpods-max.webp";
import jordan1chicago from "../../img/items_imgs/clothing/jordan1-chicago.png";
import tnfPuffer from "../../img/items_imgs/clothing/tnf-puffer.webp";
import appleWatchUltra from "../../img/items_imgs/gadgets/apple-watch-ultra.webp";
import ipadPro from "../../img/items_imgs/gadgets/ipad-pro.jpg";
import iphone14White from "../../img/items_imgs/gadgets/iphone-14-white.webp";
import jblGo from "../../img/items_imgs/gadgets/jbl-go.webp";
import jblPulse from "../../img/items_imgs/gadgets/jbl-pulse.webp";
import ps5 from "../../img/items_imgs/gadgets/ps5.webp";



const Home = () => {

  return(
    <main className="main">
      <div className="giveaway-container">
        <GiveawayCards />
      </div>
      <div className="container-02" id="container-group-title">
          BESTSELLERS
      </div>
      <div className="container-02">
        <Box
            caseLogo={case01}
            caseItemLogo={iphones}
            name={"Iphone Farm"}
            price={20.99}
            items={{
              item01: { img: iphones, chance: 5, price: 100, name: "Iphone 14 PRO MAX" },
              item02: { img: iphone14White, chance: 10, price: 80, name: "Iphone 14" },
              item03: { img: jordan1chicago, chance: 25, price: 10, name: "Jordan 1 Chicago" },
              item04: { img: jblGo, chance: 60, price: 2.99, name: "JBL Go" },
            }}
          />
          <Box
            caseLogo={case01}
            caseItemLogo={bag}
            name={"Easy Dior"}
            price={5}
            items={{
              item01: { img: bag, chance: 15, price: 100, name: "Dior Bag" },
              item02: { img: iphones, chance: 16, price: 50, name: "Iphone 14 PRO MAX" },
              item03: { img: jordan, chance: 29, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: jblGo, chance: 40, price: 2.99, name: "JBL Go" },
            }}
          />
        <Box
            caseLogo={case01}
            caseItemLogo={jordan1chicago}
            name={"Hype Jordan"}
            price={8}
            items={{
              item01: { img: iphones, chance: 15, price: 22, name: "Iphone 14 PRO MAX" },
              item02: { img: jordan1chicago, chance: 20, price: 15, name: "Jordan 1 Chicago" },
              item03: { img: jordan, chance: 25, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: jblGo, chance: 40, price: 2.99, name: "JBL Go" },
            }}
          />
          <Box
            caseLogo={case01}
            caseItemLogo={appleWatchUltra}
            name={"Apple"}
            price={5}
            items={{
              item01: { img: iphones, chance: 10, price: 22, name: "Iphone 14 PRO MAX" },
              item02: { img: iphone14White, chance: 20, price: 15, name: "Iphone 14" },
              item03: { img: appleWatchUltra, chance: 30, price: 9.99, name: "Apple Watch Ultra" },
              item04: { img: airpodsMax, chance: 40, price: 2.99, name: "Airpods Max" },
            }}
          />
          <Box
            caseLogo={case01}
            caseItemLogo={ps5}
            name={"Game set"}
            price={20.99}
            items={{
              item01: { img: ps5, chance: 5, price: 100, name: "PS 5" },
              item02: { img: jblPulse, chance: 25, price: 80, name: "JBL Pulse" },
              item03: { img: ipadPro, chance: 30, price: 10, name: "IPad PRO" },
              item04: { img: airpodsMax, chance: 40, price: 2.99, name: "Airpods Max" },
            }}
          />
        </div>
        <div className="container-02" id="container-group-title">
          ONLY ON EzzDrop
        </div>
        <div className="container-02">
          <Box
            caseLogo={case01}
            caseItemLogo={tnfPuffer}
            name={"TNF"}
            price={5}
            items={{
              item01: { img: iphones, chance: 15, price: 50, name: "Iphone 14 PRO MAX" },
              item02: { img: bag, chance: 16, price: 100, name: "Dior Bag" },
              item03: { img: jordan, chance: 29, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: tnfPuffer, chance: 40, price: 2.99, name: "TNF Puffer Jacket" },
            }}
          />
        <Box
            caseLogo={case01}
            caseItemLogo={jordan}
            name={"Hype Jordan"}
            price={8}
            items={{
              item01: { img: iphones, chance: 1, price: 22, name: "Iphone 14 PRO MAX" },
              item02: { img: bag, chance: 2, price: 15, name: "Dior Bag" },
              item03: { img: jordan, chance: 7, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: airpodsMax, chance: 90, price: 2.99, name: "Airpods Max" },
            }}
          />
          <Box
            caseLogo={case01}
            caseItemLogo={ipadPro}
            name={"Ipad Farm"}
            price={5}
            items={{
              item01: { img: iphones, chance: 10, price: 22, name: "Iphone 14 PRO MAX" },
              item02: { img: ipadPro, chance: 20, price: 15, name: "IPad PRO" },
              item03: { img: iphone14White, chance: 30, price: 9.99, name: "IPhone 14" },
              item04: { img: airpodsMax, chance: 40, price: 2.99, name: "Airpods Max" },
            }}
          />


  <Box
            caseLogo={case01}
            caseItemLogo={iphones}
            name={"Iphone Farm"}
            price={20.99}
            items={{
              item01: { img: iphones, chance: 5, price: 100, name: "Iphone 14 PRO MAX" },
              item02: { img: bag, chance: 10, price: 80, name: "Dior Bag" },
              item03: { img: jordan, chance: 25, price: 10, name: "Jordan 1 Dark Mocha" },
              item04: { img: airpodsMax, chance: 60, price: 2.99, name: "Airpods Max" },
            }}
          />
          <Box
            caseLogo={case01}
            caseItemLogo={bag}
            name={"Easy Dior"}
            price={5}
            items={{
              item01: { img: iphones, chance: 15, price: 50, name: "Iphone 14 PRO MAX" },
              item02: { img: bag, chance: 16, price: 100, name: "Dior Bag" },
              item03: { img: jordan, chance: 29, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: airpodsMax, chance: 40, price: 2.99, name: "Airpods Max" },
            }}
          />
        <Box
            caseLogo={case01}
            caseItemLogo={jblPulse}
            name={"Sound Update"}
            price={8}
            items={{
              item01: { img: iphones, chance: 1, price: 22, name: "Iphone 14 PRO MAX" },
              item02: { img: jblPulse, chance: 2, price: 15, name: "JBL Pulse" },
              item03: { img: airpodsMax, chance: 7, price: 9.99, name: "Airpods Max" },
              item04: { img: jblGo, chance: 90, price: 2.99, name: "JBL Go" },
            }}
          />
          <Box
            caseLogo={case01}
            caseItemLogo={iphones}
            name={"Iphone Farm"}
            price={5}
            items={{
              item01: { img: iphones, chance: 10, price: 22, name: "Iphone 14 PRO MAX" },
              item02: { img: bag, chance: 20, price: 15, name: "Dior Bag" },
              item03: { img: jordan, chance: 30, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: airpodsMax, chance: 40, price: 2.99, name: "Airpods Max" },
            }}
          />


          <Box
            caseLogo={case01}
            caseItemLogo={iphones}
            name={"Iphone 14"}
            price={20.99}
            items={{
              item01: { img: iphones, chance: 5, price: 100, name: "Iphone 14 PRO MAX" },
              item02: { img: iphone14White, chance: 10, price: 80, name: "IPhone 14" },
              item03: { img: ipadPro, chance: 25, price: 10, name: "IPad PRO" },
              item04: { img: airpodsMax, chance: 60, price: 2.99, name: "Airpods Max" },
            }}
          />
          <Box
            caseLogo={case01}
            caseItemLogo={bag}
            name={"Easy Dior"}
            price={5}
            items={{
              item01: { img: iphones, chance: 15, price: 50, name: "Iphone 14 PRO MAX" },
              item02: { img: bag, chance: 16, price: 100, name: "Dior Bag" },
              item03: { img: jordan, chance: 29, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: airpodsMax, chance: 40, price: 2.99, name: "Airpods Max" },
            }}
          />
        <Box
            caseLogo={case01}
            caseItemLogo={jordan}
            name={"Hype Jordan"}
            price={8}
            items={{
              item01: { img: iphones, chance: 1, price: 22, name: "Iphone 14 PRO MAX" },
              item02: { img: bag, chance: 2, price: 15, name: "Dior Bag" },
              item03: { img: jordan, chance: 7, price: 9.99, name: "Jordan 1 Dark Mocha" },
              item04: { img: airpodsMax, chance: 90, price: 2.99, name: "Airpods Max" },
            }}
          />
      </div>
    </main>
  )
}

export default Home;
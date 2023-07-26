import React from "react";

import "./styles/home.css";

import Box from "./Box.js";
import GiveawayCards from "./GiveawayCards.js";

import case01 from "../../img/boxes_imgs/case-01.webp";

import iphones from "../../img/items_imgs/gadgets/iphones-pmax-all-colours.webp";
import jordan from "../../img/items_imgs/clothing/jordan1-dark.webp";
import bag from "../../img/items_imgs/clothing/dior-white-bag.webp";
import airpodsMax from "../../img/items_imgs/gadgets/airpods-max.webp";



const Home = () => {

  return(
    <main className="main">
      <div className="giveaway-container">
        <GiveawayCards />
      </div>
      <div className="container-02">

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

      </div>
    </main>
  )
}

export default Home;
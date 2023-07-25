import React from "react";

import "./styles/home.css";

import Box from "./Box.js";

import case01 from "../../img/boxes_imgs/case-01.webp";

import iphones from "../../img/items_imgs/gadgets/iphones-pmax-all-colours.webp";
import jordan from "../../img/items_imgs/clothing/jordan1-dark.webp";
import bag from "../../img/items_imgs/clothing/dior-white-bag.webp";
import airpodsMax from "../../img/items_imgs/gadgets/airpods-max.webp";



const Home = (props) => {

  return(
    <main className="main">
      <div className="container-02">

      <Box
          caseLogo={case01}
          caseItemLogo={iphones}
          name={"Iphone Farm"}
          price={25}
          items={{
            item01: { img: iphones, chance: 10, price: 22 },
            item02: { img: bag, chance: 20, price: 15 },
            item03: { img: jordan, chance: 30, price: 9.99 },
            item04: { img: airpodsMax, chance: 40, price: 2.99 },
          }}
        />
        <Box
          caseLogo={case01}
          caseItemLogo={iphones}
          name={"Iphone Farm"}
          price={8.99}
          items={{
            item01: { img: iphones, chance: 10, price: 22 },
            item02: { img: bag, chance: 20, price: 15 },
            item03: { img: jordan, chance: 30, price: 9.99 },
            item04: { img: airpodsMax, chance: 40, price: 2.99 },
          }}
        />
       <Box
          caseLogo={case01}
          caseItemLogo={iphones}
          name={"Iphone Farm"}
          price={8.99}
          items={{
            item01: { img: iphones, chance: 10, price: 22 },
            item02: { img: bag, chance: 20, price: 15 },
            item03: { img: jordan, chance: 30, price: 9.99 },
            item04: { img: airpodsMax, chance: 40, price: 2.99 },
          }}
        />
        <Box
          caseLogo={case01}
          caseItemLogo={iphones}
          name={"Iphone Farm"}
          price={8.99}
          items={{
            item01: { img: iphones, chance: 10, price: 22 },
            item02: { img: bag, chance: 20, price: 15 },
            item03: { img: jordan, chance: 30, price: 9.99 },
            item04: { img: airpodsMax, chance: 40, price: 2.99 },
          }}
        />
        
      </div>
    </main>
  )
}

export default Home;
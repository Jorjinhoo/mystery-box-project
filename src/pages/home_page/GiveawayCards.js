import React from "react";

import Timer from "./Timer";

import "./styles/giveaway-cards.css";

import airpodsMax from "../../img/items_imgs/gadgets/airpods-max.webp";
import appleWatchUltra from "../../img/items_imgs/gadgets/apple-watch-ultra.webp";
import ipadPro from "../../img/items_imgs/gadgets/ipad-pro.jpg";
import diorBag from "../../img/items_imgs/clothing/dior-white-bag.webp";


const GiveawayCards = () => {
  return(
    <div className="giveaway-cards-groups">
      <div className="giveaway-cards-groups__group">
        <a href="#" className="giveaway-card" id="hour-giveaway-card">
          <div className="giveaway-card__info">
            <h3 className="giveaway-card__title">10 - Hour Giveaway</h3>
            <Timer days={0} hours={10} />
            <h3 className="giveaway-card__item-name">AirPods Max</h3>
            <h4 className="giveaway-card__item-price">20 $</h4>
          </div>
          <img src={airpodsMax} alt="" className="giveaway-card__img" />
        </a>
        <a href="#" className="giveaway-card" id="daily-giveaway-card">
          <div className="giveaway-card__info">
            <h3 className="giveaway-card__title">Daily Giveaway</h3>
            <Timer days={1} hours={0} />
            <h3 className="giveaway-card__item-name">Dior Bag</h3>
            <h4 className="giveaway-card__item-price">900 $</h4>
          </div>
          <img src={diorBag} alt="" className="giveaway-card__img" />
        </a>
      </div>
      
      <div className="giveaway-cards-groups__group">
      <a href="#" className="giveaway-card" id="weekly-giveaway-card">
          <div className="giveaway-card__info">
            <h3 className="giveaway-card__title">Weekly Giveaway</h3>
            <Timer days={7} hours={0} />
            <h3 className="giveaway-card__item-name">Ipad PRO</h3>
            <h4 className="giveaway-card__item-price">1200 $</h4>
          </div>
          <img src={ipadPro} alt="" className="giveaway-card__img" />
        </a>
        <a href="#" className="giveaway-card" id="monthly-giveaway-card">
          <div className="giveaway-card__info">
            <h3 className="giveaway-card__title">Monthly Giveaway</h3>
            <Timer days={30} hours={0} />
            <h3 className="giveaway-card__item-name">Apple Watch Ultra x2</h3>
            <h4 className="giveaway-card__item-price">2000 $</h4>
          </div>
          <img src={appleWatchUltra} alt="" className="giveaway-card__img" />
        </a>
      </div>
    </div>
  )
}

export default GiveawayCards;
import React from "react";

import "./styles/content-item-card.css";


const ContentItemCard = (props) => {
  return(
    <div className="content-item-card">
      <img src={props.item?.img} alt="" className="content-item-card__img" />
      <div className="content-item-info">
        <p className="content-item-info__name">{props.item?.name}</p>
        <p className="content-item-info__price">{props.item?.price} $</p>
      </div>
    </div>
  )
}

export default ContentItemCard;
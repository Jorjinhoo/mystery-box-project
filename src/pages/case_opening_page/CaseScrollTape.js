import React, { useEffect, useState } from "react";

import "./styles/case-scroll-tape.css";

import redPointer from "../../img/icons/red-pointer.png";

import generateTapeItems from "./scroll-tape-functions/generate-tape-items";


const CaseScrollTape = (props) => {

  const { scroll, setScroll, casePrice, setBalance } = props;

  const [scrolling, setScrolling] = useState(false);
  

  const items = [
    { price: props.item01?.price, img: props.item01?.img, name: props.item01?.name, chance: props.item01?.chance },
    { price: props.item02?.price, img: props.item02?.img, name: props.item02?.name, chance: props.item02?.chance },
    { price: props.item03?.price, img: props.item03?.img, name: props.item03?.name, chance: props.item03?.chance },
    { price: props.item04?.price, img: props.item04?.img, name: props.item04?.name, chance: props.item04?.chance },
  ];

  useEffect(() => {
    if (scroll && !scrolling) {
        
      setScrolling(true);
      console.log("START SCROLLING");

      generateTapeItems(items, 41);
      const list = document.querySelector(".scope__list");
      
      setTimeout(() => {
        list.style.left = "50%";
        list.style.transform = "translate3d(-50%, 0, 0)";
      }, 0);

      const handleTransitionEnd = () => {
          
        item.classList.add("active");
        const winnerItemData = JSON.parse(item.getAttribute("data-item"));
        console.log("Winner:", winnerItemData);
  
        props.addItemToAccount(winnerItemData);
        setBalance((prevBalance) => prevBalance - casePrice);
  
        setScroll(false);
        setScrolling(false);
            
  
        list.removeEventListener("transitionend", handleTransitionEnd);
          
      };

        const item = list.querySelector("li:nth-child(21)"); // Selecting the middle item

        list.addEventListener("transitionend", handleTransitionEnd);

        return () => {
          list.removeEventListener("transitionend", handleTransitionEnd);
        };
    }
    
  }, [scroll]);
      
    
  return (
    <div className="scroll-tape-container">
      <img src={redPointer} alt="" className="tape-pointer" />
      <div className="scope">
        <ul className="scope__list">
          <li className="scope-list__item">
            {props.item01 && <img src={props.item01.img} alt="" />}
          </li>
          <li className="scope-list__item">
            {props.item02 && <img src={props.item02.img} alt="" />}
          </li>
          <li className="scope-list__item">
            {props.item03 && <img src={props.item03.img} alt="" />}
          </li>
          <li className="scope-list__item">
            {props.item04 && <img src={props.item04.img} alt="" />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaseScrollTape;
import React, { useEffect, useState } from "react";
import "./case-scroll-tape.css";
import redPointer from "../../img/icons/red-pointer.png";

const cells = 41;

function getItem(items) {
  let item;
  while (!item) {
    const chance = Math.floor(Math.random() * 100000); // Set chance from 0.001 to 100
    items.forEach((el) => {
      if (el.chance > chance && !item) item = el;
    });
  }
  return item;
}




const CaseScrollTape = (props) => {

  const { scroll, setScroll, casePrice, setBalance } = props;
  const [scrolling, setScrolling] = useState(false);

  const items = [
    { price: props.item01?.price, img: props.item01?.img, chance: props.item01?.chance },
    { price: props.item02?.price, img: props.item02?.img, chance: props.item02?.chance },
    { price: props.item03?.price, img: props.item03?.img, chance: props.item03?.chance },
    { price: props.item04?.price, img: props.item04?.img, chance: props.item04?.chance },
  ];

  useEffect(() => {
    let scrollTimer;

    if (scroll && !scrolling) {
      setBalance((prevBalance) => prevBalance - casePrice);
      console.log("START SCROLLING");
      setScrolling(true);

      const list = document.querySelector(".scope__list");
      list.style.left = "50%";
      list.style.transform = "translate3d(-50%, 0, 0)";
      list.innerHTML = ""; // Clear previous items

      for (let i = 0; i < cells; i++) {
        const item = getItem(items);

        const li = document.createElement("li");
        li.setAttribute("data-item", JSON.stringify(item)); // Item id
        li.classList.add("scope-list__item");
        li.innerHTML = `<img src="${item.img}" alt="" />`;

        list.append(li);
      }

      const item = list.querySelector("li:nth-child(21)"); // Selecting the middle item

      const handleTransitionEnd = () => {
        item.classList.add("active");
        const winnerItemData = JSON.parse(item.getAttribute("data-item"));
        
        console.log("Winner:", winnerItemData); // Do something with the winner data


      };

      list.addEventListener("transitionend", handleTransitionEnd);


      const scrollDuration = 5000; // Scroll duration in milliseconds
      scrollTimer = setTimeout(() => {
        console.log(scrolling);
        console.log(scroll);

        setScrolling(false);
        setScroll();
      }, scrollDuration);
    }

    return () => {
      clearTimeout(scrollTimer); // Clear the timer if the component unmounts before the scrolling is finished
    };
  }, [scroll, scrolling, setScroll, casePrice, setBalance, items]);

  return (
    <div className="scroll-tape-container">
      <img src={redPointer} alt="" className="tape-pointer" />
      <div className="scope">
        <ul className="scope__list">
          <li className="scope-list__item">
            {props.item01 && <img src={props.item01.img} alt="" />}
          </li>
          <li className="scope-list__item">
            {props.item01 && <img src={props.item01.img} alt="" />}
          </li>
          <li className="scope-list__item">
            {props.item01 && <img src={props.item01.img} alt="" />}
          </li>
          <li className="scope-list__item">
            {props.item01 && <img src={props.item01.img} alt="" />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaseScrollTape;


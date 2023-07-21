import React, {useEffect, useState} from "react";

import "./case-scroll-tape.css";

import redPointer from "../../img/icons/red-pointer.png";

const CaseScrollTape = (props) =>{

  const { scroll, setScroll } = props;
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;

    if (scroll && !scrolling) {
      console.log("START SCROLLING");
      setScrolling(true);

      // Выполните здесь ваш код скроллинга или любые другие асинхронные операции,
      // которые занимают время.

      // Устанавливаем scrolling на false сразу после выполнения скроллинга.
      setScrolling(false);

      // После выполнения скроллинга или операций установите scrolling на false
      // и обновите состояние scroll на false.
      // Например, если скроллинг займет 1 секунду, то можно использовать следующий подход:
      const scrollDuration = 5000; // Время выполнения скроллинга в миллисекундах
      scrollTimer = setTimeout(() => {
        setScrolling(false);
        setScroll();
      }, scrollDuration);
    }

    // Возвращаем функцию очистки эффекта, чтобы отменить таймер,
    // если компонент размонтируется до завершения скроллинга.
    return () => clearTimeout(scrollTimer);
  }, [scroll, scrolling, setScroll]);


  return(
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
  )
}

export default CaseScrollTape;
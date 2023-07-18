import React from "react";

import "./home.css";

import Box from "./Box.js";

import case01 from "../../img/boxes_imgs/case-01.webp";

import iphones from "../../img/items_imgs/gadgets/iphones-pmax-all-colours.webp";
import jordan from "../../img/items_imgs/clothing/jordan1-dark.webp";
import bag from "../../img/items_imgs/clothing/dior-white-bag.webp";



const Home = () => {

  return(
    <main className="main">
      <div className="container-02">

        <Box box={case01} item={iphones} name={"Iphone Farm"} price={8.99} />
        <Box box={case01} item={jordan} name={"Iphone Farm"} price={18} />
        <Box box={case01} item={bag} name={"Iphone Farm"} price={0.99} />
        <Box box={case01} item={iphones} name={"Iphone Farm"} price={5.99} />

        <Box box={case01} item={iphones} name={"Iphone Farm"} price={8.99} />
        <Box box={case01} item={jordan} name={"Iphone Farm"} price={18} />
        <Box box={case01} item={bag} name={"Iphone Farm"} price={0.99} />
        <Box box={case01} item={iphones} name={"Iphone Farm"} price={5.99} />

        <Box box={case01} item={iphones} name={"Iphone Farm"} price={8.99} />
        <Box box={case01} item={jordan} name={"Iphone Farm"} price={18} />
        <Box box={case01} item={bag} name={"Iphone Farm"} price={0.99} />
        <Box box={case01} item={iphones} name={"Iphone Farm"} price={5.99} />

        <Box box={case01} item={iphones} name={"Iphone Farm"} price={8.99} />
        <Box box={case01} item={jordan} name={"Iphone Farm"} price={18} />
        <Box box={case01} item={bag} name={"Iphone Farm"} price={0.99} />
        <Box box={case01} item={iphones} name={"Iphone Farm"} price={5.99} />

      </div>
    </main>
  )
}

export default Home;
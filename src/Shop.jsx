import React, { useState } from "react";

import ShopItem from "./components/ShopItem";

const Shop = () => {
  const [shopItems, setShopItems] = useState([
    "Strawberry",
    "Ginger",
    "Lemonade",
    "Raspberry",
    "Blueberry",
  ]);

  return (
    <>
      <h1>Our Best Buchas</h1>
      {shopItems.map((nm, idx) => {
        <ShopItem name={nm} key={idx} />;
      })}
    </>
  );
};

export default Shop;
